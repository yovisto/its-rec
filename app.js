import { BLACK_LISTS, QUERIES } from './consts.js';

function show(e) {

    var url = event.currentTarget.attributes["data-url"].value;
    var rec = event.currentTarget.attributes["data-rec"].value;
    var verified_words = event.currentTarget.attributes["data-words"].value;

    $("#myPopup").html("Loading ... ");
    $.getJSON(QUERIES.QUERY_3.replaceAll("XXNEEDLEXX", url).replaceAll("YYNEEDLEYY", rec), function (jd) {
        var obj = jd.results.bindings;

        $("#myPopup").html("<p>Dieses Dokument wird empfohlen, weil es ähnliche Entitäten und Kategorien enthält. <p>");

        var direct = new Set();
        var indirect = new Set();
        var categories = new Set();

        for (var key in obj) {
            var value = obj[key];
            var doc = value.doc.value.replace("http://de.dbpedia.org/resource/", "");
            var cat = value.cat.value.replace("http://de.dbpedia.org/resource/", "");
            var rec = value.recommendation.value.replace("http://de.dbpedia.org/resource/", "");

            if (doc == rec) {
                direct.add(doc);
            } else {
                indirect.add([doc, cat, rec]);
            }
            categories.add(cat);
        }

        $("#myPopup").append("<p><b>Direkte Gemeinsamkeiten:</b><p>")
        for (var item of direct) {
            $("#myPopup").append(item + "<br>\n");
        }

        $("#myPopup").append("<p><b>Gemeinsame Kategorien:</b><p>")
        for (var item of categories) {
            $("#myPopup").append(item + "<br>\n");
        }

        $("#myPopup").append("<p><b>Indirekte Verbindungen:</b><p>")
        for (var item of indirect) {
            $("#myPopup").append(item[0] + " u. " + item[2] + " (" + item[1] + ")<br>\n");
        }

        var verified_words_list = verified_words.split(',').filter(Boolean);
        if (verified_words_list.length > 0) {
            $("#myPopup").append("<p><b>Verifizierte überlappende Konzepte:</b><p>")
            $("#myPopup").append(verified_words_list.join(', ') + "<br>\n");
        }
    });

    console.log("show " + rec + " " + url);
    var popup = document.getElementById("myPopup");
    popup.classList.add("show");
    var overlay = document.getElementById("overlay");
    overlay.classList.add("show");
    var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(bodyScrollTop, e.clientX, e.clientY);
    popup.style.left = "50px";
    popup.style.top = (e.clientY + bodyScrollTop - 75) + "px";

}

function hide() {
    console.log("hide");
    var popup = document.getElementById("myPopup");
    popup.classList.remove("show");
    var overlay = document.getElementById("overlay");
    overlay.classList.remove("show");
}

function getWloLink(url) {
    if (url.startsWith("https://edu.yovisto.com/wlo/resource/")) {
        var l = url.replace("https://edu.yovisto.com/wlo/resource/", "https://redaktion.openeduhub.net/edu-sharing/components/render/");
        return " [<a target='_blank' href='" + l + "'>WLO</a>]";
    }
    return "";
}

function removeHtml(passHtmlBlock) {
    return passHtmlBlock.replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, ' ');
}

function search() {
    var search = document.getElementById("query").value;

    console.log("Searching " + search);
    $('#stage').html("Searching ...");
    var q = QUERIES.QUERY_1;
    if (document.getElementById('curriculum').checked) {
        console.log("curriculum activated");
        q = QUERIES.QUERY_1_CURRICULUM;
    }

    $.getJSON(q.replaceAll("XXNEEDLEXX", search), function (jd) {
        $('#stage').html("");
        var obj = jd.results.bindings;
        for (let key in obj) {
            var value = obj[key];
            var desc = removeHtml(value.lab.value);
            var len = 400;
            var trimmedDesc = desc.length > len ? desc.substring(0, len - 3) + "..." : desc;
            if (document.getElementById('curriculum').checked) {
                trimmedDesc = "";
            }

            var wlolink = getWloLink(value.s.value);
            var title = value.title != null ? value.title.value : desc;

            $('#stage').append('<div id="head_' + key + '" style="padding-bottom:2em;"><a  class="clickable" id="link_' + key + '" data-url="' + value.s.value + '"><b>' + title + '</b></a> [<a target="_blank" href="' + value.s.value + '">KG</a>] ' + wlolink + ' <p>' + trimmedDesc + '</p> <div id="content_' + key + '"></div></div>\n');
        
            q = QUERIES.QUERY_6.replaceAll("XXNEEDLEXX", value.s.value);					
            $.getJSON(q, function (jd2, s, r) {
                    var obj = jd2.results.bindings;
                    var results = {};
                    for (var key2 in obj) {
                        if (obj[key2].itemLabel.value in results) {
                            if ((!BLACK_LISTS.REL.includes(obj[key2].propLabel.value)) && (!BLACK_LISTS.STR.includes(obj[key2].str.value))) {
                                results[obj[key2].itemLabel.value].propLabel.add(obj[key2].propLabel.value);										
                            }									
                            results[obj[key2].itemLabel.value].cnt += 1;
                        }
                        else {
                            if ((!BLACK_LISTS.REL.includes(obj[key2].propLabel.value)) && (!BLACK_LISTS.STR.includes(obj[key2].str.value))) {
                                results[obj[key2].itemLabel.value] = {
                                    propLabel: new Set([obj[key2].propLabel.value]),
                                    image: obj[key2].image.value,
                                    item: obj[key2].item.value,
                                    str: obj[key2].str.value,
                                    cnt: 0
                                }
                            }
                            
                        }								
                    }
                    
                    let entries = Object.entries(results);							
                    entries.sort((a, b) => b[1].cnt - a[1].cnt);							
                    results = Object.fromEntries(entries);
                    for (var key2 in results) {
                        const title = results[key2].str + ': ' + key2 + ' [' + [...results[key2].propLabel].join(', ') + ']'
                        $('#head_' + key).append('<a href="' + results[key2].item + '" target="_blank"><img src=' + results[key2].image + ' + title="' + title + '" height=100 width=75></a>')								
                    }							
                    
    
            });

            $("#link_" + key).click(function (event) {
                var url= event.currentTarget.attributes["data-url"].value;
                console.log("retrieving recommendations for " + url);
                var id = event.currentTarget.attributes["id"].value.replace('link', 'content');
                $("#" + id).html("Empfehlungen ... ");
                const results = [];

                $.getJSON(QUERIES.QUERY_2.replaceAll("XXNEEDLEXX", url), function (jd2, s, r) {
                    var obj = jd2.results.bindings;
                    if (obj.length == 0) {
                        $("#" + id).append("Es konnte nichts gefunden werden.");
                    }
                    for (var key2 in obj) {
                        var value = obj[key2];
                        console.log(id);
                        var rec = value.doc.value;
                        if (rec != url) {
                            results.push({
                                id: key + "_" + key2,
                                rec: rec,
                                cnt: value.cnt.value,
                                title: value.finalTitle ? value.finalTitle.value : rec,
                                verified_words: []
                            });
                        }
                    }

                    $.getJSON(QUERIES.QUERY_5.replaceAll("XXNEEDLEXX", url), function (jd3, s1, r1) {
                        var obj3 = jd3.results.bindings;
                        console.log(obj3);
                        console.log(obj);
                        for (var key3 in obj3) {
                            var value3 = obj3[key3];
                            ext_objs = results.filter(result => result.rec == value3.coref.value);
                            if (ext_objs.length > 0) {
                                ext_objs[0].verified_words.push(value3.surface.value)
                            }
                            else {
                                results.push({
                                    id: key + "_" + key3,
                                    rec: value3.coref.value,
                                    cnt: value3.cnt.value,
                                    title: value3.name2.value,
                                    verified_words: [value3.surface.value]
                                });
                            }
                        }

                        results.forEach(result => {
                            if (result.verified_words.length > result.cnt) {
                                result.cnt = result.verified_words.length
                            }
                        });

                        results.forEach(result => {
                            var verified_words = result.verified_words.join(',');                            
                            $("#" + id).append("<div><a class='clickable' id='rec_" + result.id + "' data-url='" + url + "' data-words='" + verified_words + "' data-rec='" + result.rec + "'>" + result.cnt + ": " + result.title + "</a> [<a target='_blank' href='" + result.rec + "''>KG</a>] " + getWloLink(result.rec) + "</div>\n")
                            document.getElementById('rec_' + result.id).addEventListener('click', show);                            
                        });

                    });

                });

            });
        };
    });
}

document.addEventListener('DOMContentLoaded', function() {    
    document.getElementById('searchButton').addEventListener('click', search);
    document.getElementById('overlay').addEventListener('click', hide);
});