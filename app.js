function leaderComms(thisURL) {
    if (thisURL.indexOf('/community-home?communitykey=') >= 0) {
        var leaderCommsList = {
            "ed49b695-4867-4213-aacd-abb7f08087f0":"chapt/ca"
            ,"657870db-9f8d-4ea8-bbe9-de3756389890":"chapt/fl"
            ,"823738f5-a2a3-4967-98ac-1dc72cd4d483":"chapt/mk"
            ,"ed29b65b-2821-4bbd-833d-8aee6b2e0cc2":"chapt/mt"
            ,"3c20c2e6-a026-48aa-8255-d920b8a006b8":"chapt/nh"
            ,"28fbcab8-d3af-4190-ae49-5dae0413b2b5":"chapt/oh"
            ,"125573dd-5a61-468e-92ec-61aedf4dcc94":"chapt/ok"
            ,"f1e6d229-36a9-41f7-ae0b-cfafbe0e31a8":"chapt/on"
            ,"d6fa4b8b-c959-4971-a5dd-5380e0a53e30":"chapt/al"
            ,"6630b834-7bde-4742-9821-b8a6e7b54715":"chapt/az"
            ,"a57fff20-cbc1-45b1-87a4-f831db4c919c":"chapt/ct"
            ,"ee27c8cb-4bd2-4b5e-95d9-f14f6b184123":"chapt/id"
            ,"059b1c7b-ad5e-43a0-aa69-b7349d019787":"chapt/in"
            ,"e3a115ab-0e79-41db-8c0c-554ec71475a7":"chapt/or"
            ,"2032f0a9-6000-4c0d-82c5-2417c3a81cff":"chapt/pa"
            ,"2929c9b2-c1d2-47fb-b8e8-c22de36c891c":"chapt/sc"
            ,"dcef4129-856c-4413-91ff-18c5b067a7a1":"chapt/al"
            ,"a565a391-d12f-475b-9c09-6e530072c37c":"chapt/ab"
            ,"55613df4-0ce7-4101-956a-1e418623c491":"chapt/ga"
            ,"d9c2093d-0acb-464e-888f-4d7b66b0514d":"chapt/in"
            ,"8ed7ac46-2615-4a6d-b38c-f26cd31c6771":"chapt/la"
            ,"a5b911cc-312d-4a7f-9082-758f63999675":"chapt/me"
            ,"81ec9c43-252f-4bf4-bac8-c892978772a2":"chapt/mb"
            ,"b602a452-91d9-4fb5-9da0-1553beb28bf5":"chapt/mt"
            ,"94508d02-14c8-4cca-a314-65cb9b3411f7":"chapt/nh"
            ,"b972aab3-4fd7-4b6b-875e-b467df32ce32":"chapt/ny"
            ,"dc18df4b-73a0-4301-be88-706b4e92f618":"chapt/nc"
            ,"7e83fcf5-9116-4fb7-848c-11badf340ee7":"chapt/ok"
            ,"a2a6ce0f-e28b-4f09-8fda-5322923fd687":"chapt/on"
            ,"c288c4fc-81f8-4198-9c2f-9e09d4519ebb":"chapt/rm"
            ,"40a411f3-a909-450b-9daf-4e4570fabab9":"chapt/tn"
            ,"0fc87f97-0431-4cc4-b096-a64d4b4be02f":"chapt/wa"
            ,"68a84aa5-0ea6-43e6-bc27-dbae507c22aa":"chapt/wi"
            ,"8cea54b3-b1f0-4c94-98dc-2811e6bd40f8":"chapt/ky"
            ,"f28de873-687a-4aa4-aa3b-16b6287ba710":"chapt/fth"
            ,"c2aa340f-8a12-4129-aec2-13fee0624d0e":"chapt/fts"
            ,"5705a65c-5641-420d-87e1-2a9229e0c7d8":"chapt/mtc"
            ,"65e56c25-b1d9-4b4a-9248-6bf534b1e67d":"chapt/mftwt"
            ,"1b666277-2110-4243-978b-4672a4d5c0be":"chapt/qtan"
            ,"cf166cf7-cf8d-4048-ba7a-c67a8ab4f138":"chapt/stal"
            ,"d75306e4-7831-4a23-9f5b-65eda43fcda1":"chapt/tt"
            ,"bf526743-1f97-4ac9-8a8d-0fd9546184d6":"chapt/ci"
            ,"5264daf8-fb05-4143-b873-86889f166b8f":"chapt/wmpf"
        }
        function getUrlVars() {
            var vars = {};
            var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
                vars[key.toLowerCase()] = value;
            });
            return vars;
        }
        function getCommKey(parameter, defaultvalue){
            var urlparameter = defaultvalue;
            var urlLowerCase = window.location.href.toLowerCase();
            if(urlLowerCase.indexOf(parameter) > -1){
                urlparameter = getUrlVars()[parameter];
                }
            return urlparameter;
        }
        var currCommKey = getCommKey('communitykey','nutNhoney').toLowerCase();
        if (leaderCommsList[currCommKey].length) {
            var baseDashboardUrl = 'https://www.aamft.org/AAMFT_Networks/Networks_Dashboard.aspx?groupid=';
            $('.section1 .nested-community .popover-container').after('<a href="' + baseDashboardUrl + leaderCommsList[currCommKey] +'" class="btn btn-primary pull-right" style="margin-bottom: 10px;">Network Dashboard</a>');
        }
    }
}
function refundButton(thisURL){
    if (thisURL.indexOf('empages/manage-registration') >= 0) {
        $('.print-registration').after('<div class="do-refund" style="margin-top:15px;"><a href="https://form.asana.com/?hash=c00f54dc0c9d3ea055619309b2c717bb01a536118baada1dec62fda96b433fad&id=1123896884020721" target="_blank" class="btn btn-primary">Request Refund</a></div>');
    }
}

$(document).ready(function(){
    var thisURL = window.location.href.toLowerCase();
    leaderComms(thisURL);
    refundButton(thisURL);
});
