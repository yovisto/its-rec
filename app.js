import { BLACK_LISTS, QUERIES, SUB_SECTION, TOOLTIPS } from './consts.js';

function show(event) {

    var url = event.currentTarget.attributes["data-url"].value;
    var rec = event.currentTarget.attributes["data-rec"].value;
    var verified_words = event.currentTarget.attributes["data-words"].value.split(',');
    verified_words = verified_words.map(x => x.replace("http://de.dbpedia.org/resource/", "").replaceAll("_", " "));
    verified_words = verified_words.filter(Boolean);

    $("#myPopup").html("Laden ... ");
    $.getJSON(QUERIES.QUERY_3_KEA_SPOTLIGHT.replaceAll("XXNEEDLEXX", url).replaceAll("YYNEEDLEYY", rec), function (jd) {
        var obj = jd.results.bindings;

        $("#myPopup").html("<p>Dieses Dokument wird empfohlen, weil es ähnliche Entitäten und Kategorien enthält. <p>");

        var direct = new Set();
        var indirect = new Set();
        var categories = new Set();

        for (var key in obj) {
            var value = obj[key];
            var doc = value.doc.value.replace("http://de.dbpedia.org/resource/", "").replaceAll("_", " ");
            var cat = value.cat.value.replace("http://de.dbpedia.org/resource/", "").replaceAll("_", " ");
            var rec = value.recommendation.value.replace("http://de.dbpedia.org/resource/", "").replaceAll("_", " ");

            if (doc == rec) {
                direct.add(doc);
            } else {
                indirect.add([doc, cat, rec]);
            }
            categories.add(cat);
        }

        
        if (verified_words.length > 0) {
            $("#myPopup").append("<div><b>Doppelt verifizierte Gemeinsamkeiten mit WordNet:</b><div>")
            for (var word of verified_words) {
                $("#myPopup").append(word + "<br>\n");
            }
            
        }

        if (direct.size > 0) {
            $("#myPopup").append("<div><b>Direkte Gemeinsamkeiten:</b><div>")
            for (var item of direct) {
                $("#myPopup").append(item + "<br>\n");
            }
        }        

        if (categories.size > 0) {
            $("#myPopup").append("<div><b>Gemeinsame Kategorien:</b><div>")
            for (var item of categories) {
                $("#myPopup").append(item + "<br>\n");
            }
        }
        
        if (indirect.size > 0) {
            $("#myPopup").append("<div><b>Indirekte Verbindungen:</b><div>")
            for (var item of indirect) {
                $("#myPopup").append(item[0] + " u. " + item[2] + " (" + item[1] + ")<br>\n");
            }
        }
                
    });

    console.log("show " + rec + " " + url);
    var popup = document.getElementById("myPopup");
    popup.classList.add("show");
    var overlay = document.getElementById("overlay");
    overlay.classList.add("show");
    var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(bodyScrollTop, event.clientX, event.clientY);
    popup.style.left = "50px";
    popup.style.top = (event.clientY + bodyScrollTop - 75) + "px";

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
        return " [<a title='" + TOOLTIPS.WLO + "' target='_blank' href='" + l + "'>WLO</a>]";
    }
    return "";
}

function removeHtml(passHtmlBlock) {
    return passHtmlBlock.replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, ' ');
}

function addAccordionEventHandlers(id) {
  const handleHeader = function () {
    const content = this.nextElementSibling;
    const symbol = this.querySelector('.symbol');          
    if (content.style.display === 'block') {
        content.style.display = 'none';
        symbol.textContent = '+';
    } else {
        content.style.display = 'block';
        symbol.textContent = '-';
    }
  };
  document.getElementById('rec_header' + id).addEventListener('click', handleHeader);  
  document.getElementById('person_header' + id).addEventListener('click', handleHeader);  
}

function createGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function showTooltip(event) {
    $("#myPopup").html("");
    if (event.target.classList.contains('tooltip-img-direct')) {
        $("#myPopup").append('<span style="display: inline-block; width: 10px; height: 10px; background-color: green;"></span> Person direkt in den Metadaten erwähnt<br>')        
    } else {
        const indirect_subj = event.target.getAttribute('indirect-subj');    
        $("#myPopup").append('<span style="display: inline-block; width: 10px; height: 10px; background-color: #1e73be;"></span> indirekte Verbindung über "' +  indirect_subj + '" in den Metadaten<br>')        
    }
    const tooltipText = event.target.getAttribute('data-tooltip');
    $("#myPopup").append(tooltipText);
    var popup = document.getElementById("myPopup");
    popup.classList.add("show");
    var overlay = document.getElementById("overlay");
    overlay.classList.add("show");        
    popup.style.left = `${event.pageX - 45}px`;
    popup.style.top = `${event.pageY - 180}px`;
}

function showFrame(event) {
    const this_key = event.target.attributes['id'].value.replace('span_graph', '').replace('span_timeline', '').replace('span_map', '');
    const url = event.target.attributes['data-url'].value;        
    $(`#iframe_container${this_key}`).html("");
    $(`#iframe_container${this_key}`).append(`<iframe src='${url}'></iframe>`);
    $(`#iframe_container${this_key}`).addClass("show");
    $(`#iframe_container${this_key}`).css({
        "width": "100%",
        "height": "100%"
    });
}

function expandDesc(event) {
    const desc = event.target.attributes['data-text'].value;
    const this_key =  event.target.attributes['id'].value.replace('expand_desc', '');
    $(`#desc${this_key}`).html("");
    $(`#desc${this_key}`).html(desc);
}

function search(event) {
    const search_val = document.getElementById("query").value;
    const input_url = event ? event.currentTarget.attributes["data-url"] : null;
    const url = new URL(window.location.href);                        
    url.searchParams.set('search', search_val);                
    window.history.pushState({}, '', url);

    console.log("Searching " + search_val);
    $('#stage').html("Suchen ...");
    var q = QUERIES.QUERY_1;
    if (document.getElementById('curriculum').checked) {
        console.log("curriculum activated");
        q = QUERIES.QUERY_1_CURRICULUM;
    }
    q = q.replaceAll("XXNEEDLEXX", search_val);

    if (input_url) {
        q = QUERIES.QUERY_7.replaceAll("XXNEEDLEXX", input_url.value)
    }

    $.getJSON(q, function (jd) {
        $('#stage').html("");
        var obj = jd.results.bindings;
        for (let key in obj) {
            var value = obj[key];
            var desc = removeHtml(value.lab.value);
            var len = 400;
            var trimmedDesc = desc;            
            if (desc.length > len) {                
                trimmedDesc = desc.substring(0, len - 3) + `<a style='cursor: pointer;' id='expand_desc${key}' data-text='${desc}'>...</a>`;                                
            }    
            if (document.getElementById('curriculum').checked) {
                trimmedDesc = "";
            }

            const wlolink = getWloLink(value.s.value);
            const title = value.title != null ? value.title.value : desc;
            const uri = value.uri != null ? value.uri.value : value.s.value
            
            $('#stage').append(`<div id="head_${key}"><a href="${uri}" data-url="${value.s.value}"><b>${title}</b></a> [<a target="_blank" href="${value.s.value}" title="${TOOLTIPS.KG}">KG</a>] ${wlolink} <p id='desc${key}'> ${trimmedDesc}</p> <div id="content_${key}"></div></div>\n`);
            if (desc.length > len && trimmedDesc != "") {                             
                $('#expand_desc' + key).click(expandDesc);
            }
            var this_sub_sec = SUB_SECTION.replaceAll('__ID__', key);
            $('#stage').append(this_sub_sec);
            addAccordionEventHandlers(key)
            $('#person_subsec' + key).html("Laden ...")
            $("#rec_subsec" + key).html("Laden ... ");

            q = QUERIES.QUERY_6_KEA_SPOTLIGHT.replaceAll("XXNEEDLEXX", value.s.value);					            
            $.getJSON(q, function (jd2, s, r) {                    
                    const obj = jd2.results.bindings;
                    var results = {};           
                    const direct_results = [];
                    const entities = new Set();
                    const people = new Set();                    
                    for (let key2 in obj) {                      
                        const str = obj[key2].str.value.replace("http://de.dbpedia.org/resource/", "").replaceAll("_", " ");
                        if (obj[key2].itemLabel.value in results) {                            
                            if ((!BLACK_LISTS.REL.includes(obj[key2].propLabel.value.toLowerCase())) && 
                                (!BLACK_LISTS.STR.includes(str.toLowerCase())) &&
                                (!BLACK_LISTS.STR.includes(obj[key2].wdc_label.value.toLowerCase())) && 
                                (!BLACK_LISTS.STR.includes(obj[key2].itemLabel.value.toLowerCase()))) {
                                    results[obj[key2].itemLabel.value].propLabel.add(obj[key2].propLabel.value);										                                
                            }									
                            results[obj[key2].itemLabel.value].cnt += 1;
                        }
                        else {
                            if ((!BLACK_LISTS.REL.includes(obj[key2].propLabel.value.toLowerCase())) && 
                                (!BLACK_LISTS.STR.includes(str.toLowerCase())) &&
                                (!BLACK_LISTS.STR.includes(obj[key2].wdc_label.value.toLowerCase())) && 
                                (!BLACK_LISTS.STR.includes(obj[key2].itemLabel.value.toLowerCase()))) {
                                    people.add('<' + obj[key2].item.value + '>');
                                    entities.add('<' + obj[key2].wdc.value + '>');                        
                                    if (obj[key2].wdc_type && obj[key2].wdc_type.value == "http://www.wikidata.org/entity/Q5") {
                                        const index = direct_results.findIndex(entry => entry.item === obj[key2].wdc.value); 
                                        if (index == -1) {
                                            direct_results.push({
                                                propLabel: new Set(['description']),
                                                item: obj[key2].wdc.value,
                                                image : obj[key2].wdc_image ? obj[key2].wdc_image.value : '',
                                                str: str,
                                                subj_title: obj[key2].wdc_label.value,
                                                obj_title: obj[key2].wdc_description.value,
                                                cnt: 100
                                            });
                                        }                                    
                                }
                                results[obj[key2].itemLabel.value] = {
                                    propLabel: new Set([obj[key2].propLabel.value]),
                                    image: obj[key2].image.value,
                                    item: obj[key2].item.value,
                                    item_description: obj[key2].item_description.value,
                                    str: str,
                                    subj_title: obj[key2].wdc_label.value,
                                    obj_title: obj[key2].itemLabel.value,
                                    cnt: 0
                                }
                            }                            
                        }								
                    }
                    
                    let entries = Object.entries(results);							
                    entries.sort((a, b) => b[1].cnt - a[1].cnt);							
                    results = Object.fromEntries(entries);
                    if (Object.keys(results).length == 0) {
                        $('#person_subsec' + key).html("Es konnte nichts gefunden werden.");
                    }
                    else {
                        $('#person_subsec' + key).html("");
                    }
                    
                    for (let key2 in results) {
                        let title = results[key2].subj_title + ': ' + results[key2].obj_title + ' [' + [...results[key2].propLabel].join(', ') + ']'
                        const index = direct_results.findIndex(item => item.subj_title === results[key2].obj_title); 
                        if (index !== -1) { 
                            title = direct_results[index].subj_title + ': ' + direct_results[index].obj_title + ' [' + [...direct_results[index].propLabel].join(', ') + ']<br>' + title;                            
                            $('#person_subsec' + key).prepend('<a href="' + results[key2].item + '" target="_blank"><img class="tooltip-img-direct" src=' + results[key2].image + ' + data-tooltip="' + title + '" height=100 width=75></a>');								
                            direct_results.splice(index, 1);
                        } else {
                            const title_2 = results[key2].obj_title + ': ' + results[key2].item_description + ' [description]'
                            title = title_2 + '<br>' + title
                            $('#person_subsec' + key).append('<a href="' + results[key2].item + '" target="_blank"><img class="tooltip-img" src=' + results[key2].image + ' indirect-subj="' + results[key2].subj_title + '" + data-tooltip="' + title + '" height=100 width=75></a>');								                            
                        }                        
                    }

                    direct_results.forEach(result => {
                        const direct_title = result.subj_title + ': ' + result.obj_title + ' [' + [...result.propLabel].join(', ') + ']'
                        $('#person_subsec' + key).prepend('<a href="' + result.item + '" target="_blank"><img class="tooltip-img-direct" src=' + result.image + ' + data-tooltip="' + direct_title + '" height=100 width=75></a>');								
                    });                    

                    const images = document.querySelectorAll('.tooltip-img, .tooltip-img-direct');
                    images.forEach(image => {
                        image.addEventListener('mouseenter', showTooltip);                        
                        image.addEventListener('mouseleave', hide);
                    });

                    if (Object.keys(results).length > 0) {
                        const all_entities = Array.from(people).concat(Array.from(entities));
                        const map_query = QUERIES.QUERY_MAP.replaceAll('XXNEEDLEXX', all_entities.join(' '));
                        const timeline_query = QUERIES.QUERY_TIMELINE.replaceAll('XXNEEDLEXX', all_entities.join(' '));
                        const graph_query = QUERIES.QUERY_GRAPH.replaceAll('XXNEEDLEXX', all_entities.join(' '));                        
                        const persons_html = `
                        <div>
                            <a style='font-size: 20px;' id='view_graph${key}' class='clickable' title='grafische Ansicht der verwandten Personen'><span id='span_graph${key}' data-url='${graph_query}'>&#x1F578;</span></a>
                            <a style='font-size: 20px;' id='view_timeline${key}' class='clickable' title='Zeitleistenansicht der verwandten Personen'><span id='span_timeline${key}' data-url='${timeline_query}'>&#x1F4C5;</span></a>
                            <a style='font-size: 20px;' id='view_map${key}' class='clickable' title='Kartenansicht der verwandten Personen'><span id='span_map${key}' data-url='${map_query}'>&#x1F310;</span></a>        
                        <div>
                        <div id='iframe_container${key}'></div>
                        `
                        $('#person_subsec' + key).append(persons_html);
                        $('#view_graph' + key).click(showFrame);
                        $('#view_timeline' + key).click(showFrame);
                        $('#view_map' + key).click(showFrame);
                    }               
                                                            
            });            
            
            const url= value.s.value;
            console.log("retrieving recommendations for " + url);                        
            

            $.getJSON(QUERIES.QUERY_2_KEA_SPOTLIGHT.replaceAll("XXNEEDLEXX", url), function (jd2, s, r) {
                const results = [];
                const obj = jd2.results.bindings;                
                for (let key2 in obj) {
                    const value = obj[key2];                    
                    const rec = value.doc.value;
                    if (rec != url) {
                        const guid_lev2 = createGUID();
                        results.push({                            
                            id: guid_lev2,
                            rec: rec,
                            cnt: value.cnt.value,
                            title: value.finalTitle ? value.finalTitle.value : rec,
                            verified_words: []
                        });
                    }
                };

                $.getJSON(QUERIES.QUERY_5_KEA_SPOTLIGHT_WN.replaceAll("XXNEEDLEXX", url), function (jd3, s1, r1) {
                    const obj3 = jd3.results.bindings;
                    console.log(obj3);
                    console.log(obj);
                    for (let key3 in obj3) {
                        const value3 = obj3[key3];
                        const ext_objs = results.filter(result => result.rec == value3.doc.value);
                        if (ext_objs.length > 0) {
                            ext_objs[0].verified_words.push(value3.e.value)
                        }
                        else {
                            const rec = value3.doc.value
                            const guid_lev3 = createGUID();
                            results.push({                                
                                id: guid_lev3,
                                rec: rec,
                                cnt: value3.cnt.value,
                                title: value3.finalTitle ? value3.finalTitle.value : rec,
                                verified_words: [value3.e.value]
                            });
                        }
                    };

                    results.forEach(result => {
                        if (result.verified_words.length > result.cnt) {
                            result.cnt = result.verified_words.length
                        }
                    });

                    if (Object.keys(results).length == 0) {
                        $("#rec_subsec" + key).html("Es konnte nichts gefunden werden.");
                    }
                    else {
                        $("#rec_subsec" + key).html("");
                    };
                    results.forEach(result => {
                        const verified_words = result.verified_words.join(',');                           
                        const guid =  createGUID()
                        $("#rec_subsec" + key).append("<div><a data-url='" + result.rec + "' id='" + guid + "' class='clickable'>" + result.title + "</a> [<a style='cursor: pointer;' id='rec_" + result.id  + "' data-url='" + url + "' data-words='" + verified_words + "' data-rec='" + result.rec + "' title='" + TOOLTIPS.WARUM + "'>Warum?</a>] " + "</a> [<a target='_blank' href='" + result.rec + "' title='" + TOOLTIPS.KG + "'>KG</a>] " + getWloLink(result.rec) + "</div>\n")
                        document.getElementById('rec_' + result.id).addEventListener('click', show);    
                        document.getElementById(guid).addEventListener('click', search);   
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

$(document).ready(function() {    
    var queryString = window.location.search;
    if (queryString) {        
        var params = queryString.substring(1).split('&');
        var queryParams = {};        
        params.forEach(function(param) {
            var pair = param.split('=');
            queryParams[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        });        
        console.log(queryParams);                
        if ('search' in queryParams) {
            var inputElement = document.getElementById('query');
            inputElement.value = queryParams['search'];
            search();
        }
    } else {
        console.log('No query parameters found.');
    }
});