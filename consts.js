
// only descripion
// var query1 = "https://edu.yovisto.com/sparql?default-graph-uri=&query=select+distinct+*+where+%7B%0D%0A%3Fs+%3Chttps%3A%2F%2Fschema.org%2Fdescription%3E+%3Flab+.%0D%0Afilter+regex%28%3Flab%2C+%22XXNEEDLEXX%22%2C+%22i%22%29%0D%0Aoptional+%7B%3Fs+%3Chttps%3A%2F%2Fschema.org%2Fname%3E+%3Ftitle+.%7D%0D%0Aoptional+%7B%3Fs+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2Ftitle%3E+%3Ftitle+.%7D%0D%0A%7D+LIMIT+5&should-sponge=&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on&run=+Run+Query+";	

export const QUERIES = {
    QUERY_1: "https://edu.yovisto.com/sparql2?default-graph-uri=&query=select+distinct+*+where+%7B%0D%0A%7B%0D%0A%3Fs+%3Chttps%3A%2F%2Fschema.org%2Fdescription%3E+%3Flab+.%0D%0Afilter+regex%28%3Flab%2C+%22XXNEEDLEXX%22%2C+%22i%22%29%0D%0Aoptional+%7B%3Fs+%3Chttps%3A%2F%2Fschema.org%2Fname%3E+%3Ftitle+.%7D%0D%0Aoptional+%7B%3Fs+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2Ftitle%3E+%3Ftitle+.%7D%0D%0A%7D%0D%0Aunion%0D%0A%7B%0D%0A%3Fs+%3Chttps%3A%2F%2Fschema.org%2Fdescription%3E+%3Flab+.%0D%0Aoptional+%7B%3Fs+%3Chttps%3A%2F%2Fschema.org%2Fname%3E+%3Ftitle+.%7D%0D%0Aoptional+%7B%3Fs+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2Ftitle%3E+%3Ftitle+.%7D%0D%0Afilter+regex%28%3Ftitle%2C+%22XXNEEDLEXX%22%2C+%22i%22%29%0D%0A%7D%0D%0A%0D%0A%7D+LIMIT+10&should-sponge=&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on&run=+Run+Query+",
    QUERY_1_CURRICULUM: "https://edu.yovisto.com/sparql2?default-graph-uri=&query=select+distinct+*+where+%7B%0D%0A%3Fs+rdfs%3Alabel+%3Flab+.%0D%0A%3Fs+a+%3Chttps%3A%2F%2Fw3id.org%2Flehrplan%2Fontology%2FLP_00000261%3E+.%0D%0A%3Fs+%3Chttps%3A%2F%2Fw3id.org%2Fcurriculum%2FhasAnnotationTarget%3E+%3Ftarget+.%0D%0A%0D%0Afilter+regex%28%3Flab%2C+%22XXNEEDLEXX%22%2C+%22i%22%29%0D%0A%7D+LIMIT+10%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A&format=application%2Fsparql-results%2Bjson&should-sponge=&timeout=0&signal_void=on",
    QUERY_2: "https://edu.yovisto.com/sparql2?default-graph-uri=&query=select+distinct++%3Fdoc++count%28distinct+%3Fcat%29+as+%3Fcnt+%3FfinalTitle+where+%7B%0D%0A%3CXXNEEDLEXX%3E+%3Chttps%3A%2F%2Fw3id.org%2Fcurriculum%2FhasAnnotationTarget%3E+%3Fctx+.%0D%0A%3Ftarget+%3Chttp%3A%2F%2Fpersistence.uni-leipzig.org%2Fnlp2rdf%2Fontologies%2Fnif-core%23referenceContext%3E+%3Fctx+.%0D%0A%3Ftarget+%3Chttp%3A%2F%2Fpersistence.uni-leipzig.org%2Fnlp2rdf%2Fontologies%2Fnif-core%23referenceContext%3E+%3Fctx+.%0D%0A%3Ftarget+%3Chttp%3A%2F%2Fwww.w3.org%2F2005%2F11%2Fits%2Frdf%23taAnnotatorsRef%3E+%3Chttp%3A%2F%2Fwww.dbpedia-spotlight.org%3E+.%0D%0A%3Ftarget+%3Chttp%3A%2F%2Fwww.w3.org%2F2005%2F11%2Fits%2Frdf%23taIdentRef%3E+%3Fe+.%0D%0A%3Fe+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2Fsubject%3E+%3Fcat+.%0D%0A%3Fe2+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2Fsubject%3E+%3Fcat+.%0D%0A%3Ftarget2+%3Chttp%3A%2F%2Fwww.w3.org%2F2005%2F11%2Fits%2Frdf%23taIdentRef%3E+%3Fe2+.%0D%0A%3Ftarget2+%3Chttp%3A%2F%2Fpersistence.uni-leipzig.org%2Fnlp2rdf%2Fontologies%2Fnif-core%23referenceContext%3E+%3Fctx2+.%0D%0A%3Fdoc+%3Chttps%3A%2F%2Fw3id.org%2Fcurriculum%2FhasAnnotationTarget%3E+%3Fctx2+.%0D%0Aoptional%7B%3Fdoc+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2Ftitle%3E+%3Ftitle2+.%7D%0D%0Aoptional%7B%3Fdoc+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23altLabel%3E+%3Ftitle3+.%7D%0D%0Aoptional%7B%3Fdoc+%3Chttps%3A%2F%2Fschema.org%2Fname%3E+%3Ftitle4+.%7D%0D%0Abind%28+coalesce%28coalesce%28%3Ftitle2%2C%3Ftitle3%29%2C+%3Ftitle4+%29+as+%3FfinalTitle%29%0D%0A%0D%0A%7D+group+by++%3Fdoc+%3FfinalTitle+order+by+desc%28%3Fcnt+%29+limit+10%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A&format=application%2Fsparql-results%2Bjson&should-sponge=&timeout=0&signal_void=on",
    QUERY_3: "https://edu.yovisto.com/sparql2?default-graph-uri=&query=select+distinct+%3Fe+as+%3Fdoc+%3Fcat+%3Fe2+as+%3Frecommendation+where+%7B%0D%0A%3CXXNEEDLEXX%3E+%3Chttps%3A%2F%2Fw3id.org%2Fcurriculum%2FhasAnnotationTarget%3E+%3Fctx+.%0D%0A%3Ftarget+%3Chttp%3A%2F%2Fpersistence.uni-leipzig.org%2Fnlp2rdf%2Fontologies%2Fnif-core%23referenceContext%3E+%3Fctx+.%0D%0A%3Ftarget+%3Chttp%3A%2F%2Fwww.w3.org%2F2005%2F11%2Fits%2Frdf%23taAnnotatorsRef%3E+%3Chttp%3A%2F%2Fwww.dbpedia-spotlight.org%3E+.%0D%0A%3Ftarget+%3Chttp%3A%2F%2Fwww.w3.org%2F2005%2F11%2Fits%2Frdf%23taIdentRef%3E+%3Fe+.%0D%0A%3Fe+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2Fsubject%3E+%3Fcat+.%0D%0A%3Fe2+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2Fsubject%3E+%3Fcat+.%0D%0A%3Ftarget2+%3Chttp%3A%2F%2Fwww.w3.org%2F2005%2F11%2Fits%2Frdf%23taIdentRef%3E+%3Fe2+.%0D%0A%3Ftarget2+%3Chttp%3A%2F%2Fpersistence.uni-leipzig.org%2Fnlp2rdf%2Fontologies%2Fnif-core%23referenceContext%3E+%3Fctx2+.%0D%0A%3CYYNEEDLEYY%3E+%3Chttps%3A%2F%2Fw3id.org%2Fcurriculum%2FhasAnnotationTarget%3E+%3Fctx2+.%0D%0A%7D%0D%0A&format=application%2Fsparql-results%2Bjson&should-sponge=&timeout=0&signal_void=on",
    QUERY_4: "https://edu.yovisto.com/sparql2?default-graph-uri=&query=select+distinct+%3Fname+%3Fili+%3Fsurface+%3Fqid+%3Fconcept+where+%7B%0D%0A%0D%0A%3CXXNEEDLEXX%3E+a+%3Chttps%3A%2F%2Fschema.org%2FCreativeWork%3E+.%0D%0A%3CXXNEEDLEXX%3E+%3Chttps%3A%2F%2Fschema.org%2Fname%3E+%3Fname+.%0D%0A%0D%0A%3CXXNEEDLEXX%3E+%3Chttps%3A%2F%2Fw3id.org%2Fcurriculum%2FhasAnnotationTarget%3E+%3Ftarget+.%0D%0A%3Ftarget+%3Chttp%3A%2F%2Fpersistence.uni-leipzig.org%2Fnlp2rdf%2Fontologies%2Fnif-core%23wasConvertedFrom%3E+%3Chttps%3A%2F%2Fschema.org%2Fname%3E+.%0D%0A%0D%0A%3Fphrase+%3Chttp%3A%2F%2Fpersistence.uni-leipzig.org%2Fnlp2rdf%2Fontologies%2Fnif-core%23referenceContext%3E+%3Ftarget+.%0D%0A%3Fphrase+%3Chttp%3A%2F%2Fwww.w3.org%2F2005%2F11%2Fits%2Frdf%23taAnnotatorsRef%3E+%3Chttps%3A%2F%2Fspacy.io%3E++.%0D%0A%3Fphrase+%3Chttp%3A%2F%2Fwww.w3.org%2F2005%2F11%2Fits%2Frdf%23taIdentRef%3E+%3Fili++.+%0D%0A%3Fphrase+%3Chttp%3A%2F%2Fpersistence.uni-leipzig.org%2Fnlp2rdf%2Fontologies%2Fnif-core%23anchorOf%3E++%3Fsurface+.%0D%0A%3Fwnid++%3Chttps%3A%2F%2Fglobalwordnet.github.io%2Fschemas%2Fwn%23ili%3E+%3Fili+.%0D%0A++%0D%0A%3Fwnid+%3Chttps%3A%2F%2Fedu.yovisto.com%2Fontology%2Fsynset%3E+%3Fsynseturi+.%0D%0A%3Fwikidata+%3Chttps%3A%2F%2Fedu.yovisto.com%2Fontology%2Fsynset%3E+%3Fsynseturi+.%0D%0A%0D%0A%3Fwikidata++owl%3AsameAs+%3Fqid+.%0D%0A%3Fconcept+owl%3AsameAs+%3Fqid+.%0D%0A%0D%0A%7D+LIMIT+1000+%0D%0A&format=application%2Fsparql-results%2Bjson&should-sponge=&timeout=0&signal_void=on",
    QUERY_5: "https://edu.yovisto.com/sparql2?default-graph-uri=&query=select+distinct+%3Fname2+%3Fcoref+%3Fsurface+count%28distinct+%3Fili%29+as+%3Fcnt+where+%7B%0D%0A%3CXXNEEDLEXX%3E+a+%3Chttps%3A%2F%2Fschema.org%2FCreativeWork%3E+.%0D%0A%3CXXNEEDLEXX%3E+%3Chttps%3A%2F%2Fschema.org%2Fname%3E+%3Fname+.%0D%0A%3CXXNEEDLEXX%3E+%3Chttps%3A%2F%2Fw3id.org%2Fcurriculum%2FhasAnnotationTarget%3E+%3Ftarget+.%0D%0A%3Ftarget+%3Chttp%3A%2F%2Fpersistence.uni-leipzig.org%2Fnlp2rdf%2Fontologies%2Fnif-core%23wasConvertedFrom%3E+%3Chttps%3A%2F%2Fschema.org%2Fname%3E+.%0D%0A%3Fphrase+%3Chttp%3A%2F%2Fpersistence.uni-leipzig.org%2Fnlp2rdf%2Fontologies%2Fnif-core%23referenceContext%3E+%3Ftarget+.%0D%0A%3Fphrase+%3Chttp%3A%2F%2Fwww.w3.org%2F2005%2F11%2Fits%2Frdf%23taAnnotatorsRef%3E+%3Chttps%3A%2F%2Fspacy.io%3E++.%0D%0A%3Fphrase+%3Chttp%3A%2F%2Fwww.w3.org%2F2005%2F11%2Fits%2Frdf%23taIdentRef%3E+%3Fili++.+%0D%0A%3Fphrase+%3Chttp%3A%2F%2Fpersistence.uni-leipzig.org%2Fnlp2rdf%2Fontologies%2Fnif-core%23anchorOf%3E++%3Fsurface+.%0D%0A%3Fwnid++%3Chttps%3A%2F%2Fglobalwordnet.github.io%2Fschemas%2Fwn%23ili%3E+%3Fili+.%0D%0A%3Fwnid+%3Chttps%3A%2F%2Fedu.yovisto.com%2Fontology%2Fsynset%3E+%3Fsynseturi+.%0D%0A%3Fwikidata+%3Chttps%3A%2F%2Fedu.yovisto.com%2Fontology%2Fsynset%3E+%3Fsynseturi+.%0D%0A%3Fwikidata++owl%3AsameAs+%3Fqid+.%0D%0A%3Fconcept+owl%3AsameAs+%3Fqid+.%0D%0A%3Fcoref+a+%3Chttps%3A%2F%2Fschema.org%2FCreativeWork%3E+.%0D%0A%3Fcoref+%3Chttps%3A%2F%2Fschema.org%2Fname%3E+%3Fname2+.%0D%0A%3Fcoref+%3Chttps%3A%2F%2Fw3id.org%2Fcurriculum%2FhasAnnotationTarget%3E+%3Ftarget2+.%0D%0A%3Ftarget2+%3Chttp%3A%2F%2Fpersistence.uni-leipzig.org%2Fnlp2rdf%2Fontologies%2Fnif-core%23wasConvertedFrom%3E+%3Chttps%3A%2F%2Fschema.org%2Fname%3E+.%0D%0A%3Fphrase2+%3Chttp%3A%2F%2Fpersistence.uni-leipzig.org%2Fnlp2rdf%2Fontologies%2Fnif-core%23referenceContext%3E+%3Ftarget2+.%0D%0A%3Fphrase2+%3Chttp%3A%2F%2Fwww.w3.org%2F2005%2F11%2Fits%2Frdf%23taAnnotatorsRef%3E+%3Chttps%3A%2F%2Fspacy.io%3E++.%0D%0A%3Fphrase2+%3Chttp%3A%2F%2Fwww.w3.org%2F2005%2F11%2Fits%2Frdf%23taIdentRef%3E+%3Fili++.+%0D%0A%3Fphrase+%3Chttp%3A%2F%2Fpersistence.uni-leipzig.org%2Fnlp2rdf%2Fontologies%2Fnif-core%23anchorOf%3E++%3Fsurface2+.%0D%0A%3Fwnid2++%3Chttps%3A%2F%2Fglobalwordnet.github.io%2Fschemas%2Fwn%23ili%3E+%3Fili+.%0D%0AFILTER%28str%28%3Fname%29+%21%3D+str%28%3Fname2%29%29%0D%0A%7D+%0D%0AORDER+BY+DESC%28%3Fcnt%29%0D%0ALIMIT+10+%0D%0A&format=application%2Fsparql-results%2Bjson&should-sponge=&timeout=0&signal_void=on",    
    QUERY_6: "https://edu.yovisto.com/sparql2?default-graph-uri=&query=PREFIX+++++++wdt%3A++%3Chttp%3A%2F%2Fwww.wikidata.org%2Fprop%2Fdirect%2F%3E%0D%0APREFIX++++++++wd%3A++%3Chttp%3A%2F%2Fwww.wikidata.org%2Fentity%2F%3E%0D%0APREFIX++++++++bd%3A++%3Chttp%3A%2F%2Fwww.bigdata.com%2Frdf%23%3E%0D%0APREFIX++wikibase%3A++%3Chttp%3A%2F%2Fwikiba.se%2Fontology%23%3E%0D%0APREFIX++++++rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+schema%3A+%3Chttp%3A%2F%2Fschema.org%2F%3E%0D%0A%0D%0ASELECT++distinct++%3FitemLabel+%3FpropLabel+%3Fitem_description+%3Fimage+%3Fitem+%3Fstr++%3Fwdc+%3Fwdc_type+%3Fwdc_label+%3Fwdc_description+%3Fwdc_image%7B%0D%0A%3Ftarget++%3Chttps%3A%2F%2Fw3id.org%2Fcurriculum%2FisAnnotationTargetOf%3E+%3CXXNEEDLEXX%3E++.%0D%0A%3Fctx+%3Chttp%3A%2F%2Fpersistence.uni-leipzig.org%2Fnlp2rdf%2Fontologies%2Fnif-core%23referenceContext%3E++%3Ftarget+.%0D%0A%3Fctx+%3Chttp%3A%2F%2Fwww.w3.org%2F2005%2F11%2Fits%2Frdf%23taAnnotatorsRef%3E+%3Chttp%3A%2F%2Fwww.dbpedia-spotlight.org%3E+.%0D%0A%3Fctx+%3Chttp%3A%2F%2Fwww.w3.org%2F2005%2F11%2Fits%2Frdf%23taIdentRef%3E+%3Fc+.%0D%0A%3Fctx+%3Chttp%3A%2F%2Fpersistence.uni-leipzig.org%2Fnlp2rdf%2Fontologies%2Fnif-core%23anchorOf%3E+%3Fstr+.%0D%0A%3Fc+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23sameAs%3E++%3Fwd+.%0D%0ABIND%28+iri%28replace%28str%28%3Fwd%29%2C+%22http%3A%2F%2Fwikidata.dbpedia.org%2Fresource%2F%22%2C+%22http%3A%2F%2Fwww.wikidata.org%2Fentity%2F%22%29%29+AS+%3Fwdc%29%0D%0A++SERVICE+%3Chttps%3A%2F%2Fquery.wikidata.org%2Fsparql%3E+%7B%0D%0A++++%3Fwdc+%3Fp+%3Fitem+.%0D%0A++++%3Fwdc+wdt%3AP31+%3Fwdc_type+.%0D%0A%3Fwdc++schema%3Adescription+%3Fwdc_description+.%0D%0AFILTER%28LANG%28%3Fwdc_description%29+%3D+%22de%22%29+.%0D%0AOPTIONAL+%7B+%3Fwdc+wdt%3AP18+%3Fwdc_image+%7D%0D%0A+++%3Fitem+wdt%3AP18+%3Fimage+.%0D%0A++++%3Fitem+wdt%3AP31+wd%3AQ5+.%0D%0A%3Fitem++schema%3Adescription+%3Fitem_description+.%0D%0AFILTER%28LANG%28%3Fitem_description%29+%3D+%22de%22%29+.%0D%0A++++SERVICE+wikibase%3Alabel+%7B+bd%3AserviceParam+wikibase%3Alanguage+%22de%22.+%3Fitem+rdfs%3Alabel+%3FitemLabel+.+%3Fprop++rdfs%3Alabel+%3FpropLabel+.+%3Fwdc++rdfs%3Alabel+%3Fwdc_label%7D%0D%0A++++%3Fprop+wikibase%3AdirectClaim+%3Fp+.+%0D%0A+++%3Fitem+wdt%3AP18+%3Fimage%0D%0A++%7D+%0D%0A%7D%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A&format=application%2Fsparql-results%2Bjson&should-sponge=&timeout=0&signal_void=on",
    QUERY_7: "https://edu.yovisto.com/sparql2?default-graph-uri=&query=select+distinct+*+where+%7B%0D%0A%7B%0D%0AVALUES+%3Fs+%7B%3CXXNEEDLEXX%3E%7D%0D%0A%3Fs+%3Chttps%3A%2F%2Fschema.org%2Fdescription%3E+%3Flab+.%0D%0Aoptional+%7B%3Fs+%3Chttps%3A%2F%2Fschema.org%2Fname%3E+%3Ftitle+.%7D%0D%0Aoptional+%7B%3Fs+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2Ftitle%3E+%3Ftitle+.%7D%0D%0A%7D%0D%0Aunion%0D%0A%7B%0D%0AVALUES+%3Fs+%7B%3CXXNEEDLEXX%3E%7D%0D%0A%3Fs+%3Chttps%3A%2F%2Fschema.org%2Fdescription%3E+%3Flab+.%0D%0Aoptional+%7B%3Fs+%3Chttps%3A%2F%2Fschema.org%2Fname%3E+%3Ftitle+.%7D%0D%0Aoptional+%7B%3Fs+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2Ftitle%3E+%3Ftitle+.%7D%0D%0A%7D%0D%0A%0D%0A%7D+LIMIT+10%0D%0A&format=application%2Fsparql-results%2Bjson&should-sponge=&timeout=0&signal_void=on",
    QUERY_MAP: 'https://query.wikidata.org/embed.html#%23defaultView%3AMap%0ASELECT%20%3Fmember%20%3FmemberLabel%20%3FplaceLabel%20%3Fcoord%20%3Fpic%0AWHERE%20%0A{%0A%20%20{%0A%20%20VALUES%20%3Fmember%20{XXNEEDLEXX}%0A%20%20%0A%20%20%20%20%20%20%20%20%3Fmember%20%20wdt%3AP19%20%3Fplace.%0A%20%20%20%20%20%20%20%20%23%3Fmember%20wdt%3AP31%20wd%3AQ5%20.%0A%20%20OPTIONAL%20{%0A%20%20%3Fmember%20wdt%3AP18%20%3Fpic%0A%20%20}%0A%20%20%3Fplace%20wdt%3AP625%20%3Fcoord%0A%20%20}%0A%20%20UNION%20{%0A%20%20%20VALUES%20%3Fmember%20{XXNEEDLEXX}%0A%20%20%0A%20%20%20%20%20%20%20%20%3Fmember%20%20wdt%3AP31%20%3Fplace.%0A%20%20%20%20%20%20%20%20%0A%20%20OPTIONAL%20{%0A%20%20%3Fmember%20wdt%3AP18%20%3Fpic%0A%20%20}%0A%20%20%3Fmember%20wdt%3AP625%20%3Fcoord%0A%20%20%20%20%20%20%20%20%20%0A%20%20%20%20}%0A%20%20%20%20%20%20%20%20%20%0A%20%20%0A%20%20%0A%20%20SERVICE%20wikibase%3Alabel%20{%20bd%3AserviceParam%20wikibase%3Alanguage%20%22[AUTO_LANGUAGE]%2Cen%22.%20}%0A}%0A',
    QUERY_TIMELINE: 'https://query.wikidata.org/embed.html#%23defaultView%3ATimeline%0ASELECT%20%3Fitem%20%3FitemLabel%20%3Fdate%20%3FeventLabel%20%3Fimage%0AWHERE%20%7B%0A%20%20VALUES%20%3Fitem%20{XXNEEDLEXX}%0A%20%20%23%20Using%20UNION%20to%20ensure%20separate%20rows%20for%20each%20event%20type%0A%20%20%7B%0A%20%20%20%20%3Fitem%20wdt%3AP569%20%3Fdate%20.%20BIND%28%22Geburtsdatum%22%20AS%20%3FeventLabel%29%0A%20%20%7D%0A%20%20UNION%0A%20%20%7B%0A%20%20%20%20%3Fitem%20wdt%3AP570%20%3Fdate%20.%20BIND%28%22Sterbedatum%22%20AS%20%3FeventLabel%29%0A%20%20%7D%20%20%0A%20%20UNION%0A%20%20%7B%0A%20%20%20%20%3Fitem%20wdt%3AP5805%20%3Fdate%20.%20BIND%28%22Heiratsdatum%22%20AS%20%3FeventLabel%29%0A%20%20%7D%0A%20%20UNION%0A%20%20%7B%0A%20%20%20%20%3Fitem%20wdt%3AP571%20%3Fdate%20.%20BIND%28%22Gr%C3%BCndungsdatum%22%20AS%20%3FeventLabel%29%0A%20%20%7D%0A%20%20UNION%0A%20%20%7B%0A%20%20%20%20%3Fitem%20wdt%3AP576%20%3Fdate%20.%20BIND%28%22Aufl%C3%B6sungsdatum%22%20AS%20%3FeventLabel%29%0A%20%20%7D%0A%20%20UNION%0A%20%20%7B%0A%20%20%20%20%3Fitem%20wdt%3AP1619%20%3Fdate%20.%20BIND%28%22Er%C3%B6ffnungsdatum%22%20AS%20%3FeventLabel%29%0A%20%20%7D%0A%20%20UNION%0A%20%20%7B%0A%20%20%20%20%3Fitem%20wdt%3AP3999%20%3Fdate%20.%20BIND%28%22Schlie%C3%9Fungsdatum%22%20AS%20%3FeventLabel%29%0A%20%20%7D%0A%20%20UNION%0A%20%20%7B%0A%20%20%20%20%3Fitem%20wdt%3AP580%20%3Fdate%20.%20BIND%28%22Anfangsdatum%22%20AS%20%3FeventLabel%29%0A%20%20%7D%0A%20%20UNION%0A%20%20%7B%0A%20%20%20%20%3Fitem%20wdt%3AP582%20%3Fdate%20.%20BIND%28%22Enddatum%22%20AS%20%3FeventLabel%29%0A%20%20%7D%0A%20%20UNION%0A%20%20%7B%0A%20%20%20%20%3Fitem%20wdt%3AP585%20%3Fdate%20.%20BIND%28%22Zeitpunkt%22%20AS%20%3FeventLabel%29%0A%20%20%7D%0A%20%20UNION%0A%20%20%7B%0A%20%20%20%20%3Fitem%20wdt%3AP793%20%3Fdate%20.%20BIND%28%22Bedeutendes%20Ereignisdatum%22%20AS%20%3FeventLabel%29%0A%20%20%7D%0A%20%20UNION%0A%20%20%7B%0A%20%20%20%20%3Fitem%20wdt%3AP7104%20%3Fdate%20.%20BIND%28%22Konfliktdatum%22%20AS%20%3FeventLabel%29%0A%20%20%7D%0A%20%20UNION%0A%20%20%7B%0A%20%20%20%20%3Fitem%20wdt%3AP7103%20%3Fdate%20.%20BIND%28%22Anfang%20des%20Konflikts%22%20AS%20%3FeventLabel%29%0A%20%20%7D%0A%20%20UNION%0A%20%20%7B%0A%20%20%20%20%3Fitem%20wdt%3AP7105%20%3Fdate%20.%20BIND%28%22Ende%20des%20Konflikts%22%20AS%20%3FeventLabel%29%0A%20%20%7D%0A%20%20UNION%0A%20%20%7B%0A%20%20%20%20%3Fitem%20wdt%3AP575%20%3Fdate%20.%20BIND%28%22Entdeckungsdatum%22%20AS%20%3FeventLabel%29%0A%20%20%7D%0A%20%20UNION%0A%20%20%7B%0A%20%20%20%20%3Fitem%20wdt%3AP577%20%3Fdate%20.%20BIND%28%22Ver%C3%B6ffentlichungsdatum%22%20AS%20%3FeventLabel%29%0A%20%20%7D%0A%20%20UNION%0A%20%20%7B%0A%20%20%20%20%3Fitem%20wdt%3AP1191%20%3Fdate%20.%20BIND%28%22Erstdatum%20der%20Auff%C3%BChrung%22%20AS%20%3FeventLabel%29%0A%20%20%7D%0A%20%20UNION%0A%20%20%7B%0A%20%20%20%20%3Fitem%20wdt%3AP2754%20%3Fdate%20.%20BIND%28%22Produktionsdatum%22%20AS%20%3FeventLabel%29%0A%20%20%7D%0A%20%20UNION%0A%20%20%7B%0A%20%20%20%20%3Fitem%20wdt%3AP757%20%3Fdate%20.%20BIND%28%22Welterbe-Einschreibungsdatum%22%20AS%20%3FeventLabel%29%0A%20%20%7D%0A%0A%20%20%23%20Fetch%20the%20image%20%28if%20available%29%0A%20%20OPTIONAL%20%7B%20%0A%20%20%20%20%3Fitem%20wdt%3AP18%20%3Fimage%20.%0A%20%20%7D%0A%0A%20%20%23%20Label%20in%20German%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22de%22.%20%7D%0A%7D%0AORDER%20BY%20%3Fdate%0A'
};

export const BLACK_LISTS = {
    STR: ['youtube', 'sony', 'creative commons', 'led', 'facebook', 'facebook.com', 'twitter', 'instagram', 'cc-by-sa', 'youtuber', 'website', 'kanal', 'pinterest', 'snapchat', 'vlogbrothers', 'hank green', 'wikipedia', 'youtube.com', 'wikimedia commons', 'reddit', 'instagram.com', 'cc', 'x', 'zdf', 'tweet', 'bayerischer rundfunk'],
    REL: ['leiter der regierung oder verwaltung', 'staatsoberhaupt', 'darsteller', 'beispielelement', 'verschieden von', 'interpret', 'geschlecht']		
}

export const TOOLTIPS = {
    KG: 'den Wissensgraphen für diese Ressource browsen',
    WLO: 'zu der entsprechenden wirlernenonline.de Ressource gehen',
    WARUM: 'ausführliche Erklärung, warum diese Ressource empfohlen wird',
    GRAPH_VIEW: 'grafische Ansicht der verwandten Personen',
    TIMELINE_VIEW: 'Zeitleistenansicht der verwandten Personen',
    MAP_VIEW: 'Kartenansicht der verwandten Personen'
}

export const SUB_SECTION = `
<div class="accordion">
        <div class="accordion-item">
            <div id="rec_header__ID__" class="accordion-header">
                Empfehlungen <span class="symbol">+</span>
            </div>
            <div id="rec_subsec__ID__" class="accordion-content">                
            </div>
        </div>
        <div class="accordion-item">
            <div id="person_header__ID__" class="accordion-header">
                Relevante Personen <span class="symbol">+</span>                
            </div>                          
            <div id="person_subsec__ID__" class="accordion-content">                                    
            </div>            
        </div>        
</div>
`

export const PERSON_VIEWS = `
    <div>
        <a style='font-size: 20px;' id='view_graph__ID__' class='clickable' title='grafische Ansicht der verwandten Personen'><span>&#x1F578;</span></a>
        <a style='font-size: 20px;' id='view_timeline__ID__' class='clickable' title='Zeitleistenansicht der verwandten Personen' href='__TIMELINEHREF__' target='_blank'><span>&#x1F4C5;</span></a>
        <a style='font-size: 20px;' id='view_map__ID__' class='clickable' title='Kartenansicht der verwandten Personen' href='__MAPHREF__' target='_blank'><span>&#x1F310;</span></a>
    </div>
`