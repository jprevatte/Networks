function leaderComms(thisURL) {
    if (thisURL.indexOf('/community-home?communitykey=') >= 0) {
        var leaderCommsList = { 
            "3c20c2e6-a026-48aa-8255-d920b8a006b8":"NH_SUB"
            ,"d6fa4b8b-c959-4971-a5dd-5380e0a53e30":"AL_SUB"
            ,"6630b834-7bde-4742-9821-b8a6e7b54715":"AZ_SUB"
            ,"a57fff20-cbc1-45b1-87a4-f831db4c919c":"CT_SUB"
            ,"2032f0a9-6000-4c0d-82c5-2417c3a81cff":"PA_SUB"
            ,"2929c9b2-c1d2-47fb-b8e8-c22de36c891c":"SC_SUB"
            ,"55613df4-0ce7-4101-956a-1e418623c491":"GA_SUB"
            ,"d9c2093d-0acb-464e-888f-4d7b66b0514d":"IN_SUB"
            ,"b602a452-91d9-4fb5-9da0-1553beb28bf5":"MT_SUB"
            ,"b972aab3-4fd7-4b6b-875e-b467df32ce32":"NY_SUB"
            ,"dc18df4b-73a0-4301-be88-706b4e92f618":"NC_SUB"
            ,"7e83fcf5-9116-4fb7-848c-11badf340ee7":"OK_SUB"
            ,"c288c4fc-81f8-4198-9c2f-9e09d4519ebb":"RM_SUB"
            ,"40a411f3-a909-450b-9daf-4e4570fabab9":"TN_SUB"
            ,"0fc87f97-0431-4cc4-b096-a64d4b4be02f":"WA_SUB"
            ,"68a84aa5-0ea6-43e6-bc27-dbae507c22aa":"WI_SUB"
            ,"f28de873-687a-4aa4-aa3b-16b6287ba710":"FTH_SUB"
            ,"c2aa340f-8a12-4129-aec2-13fee0624d0e":"FTS_SUB"
            ,"5705a65c-5641-420d-87e1-2a9229e0c7d8":"MTC_SUB"
            ,"65e56c25-b1d9-4b4a-9248-6bf534b1e67d":"MFTWT_SUB"
            ,"1b666277-2110-4243-978b-4672a4d5c0be":"QTAN_SUB"
            ,"d75306e4-7831-4a23-9f5b-65eda43fcda1":"TT_SUB"
            ,"bf526743-1f97-4ac9-8a8d-0fd9546184d6":"CI_SUB"
            ,"5264daf8-fb05-4143-b873-86889f166b8f":"WMPF_SUB"
            ,"fbcea787-9670-4abd-9f37-4f563dd8c2f1":"IRSFT_SUB"
            ,"e0f8ac36-5c1f-40ab-a6eb-8a2e72a9ae14":"SUOAD_SUB"
            ,"fdc3ce8c-cffa-461b-8c08-e1cbf8e1203f":"Advocacy"
            ,"ff9a815f-f75d-4894-9fae-01966ec90f1e":"NIN_SUB"
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
            var baseDashboardUrl = 'https://www.aamft.org/AAMFT_Networks/Networks-Dashboard-V3?groupid=';
            var stateID = "&stateId=" + leaderCommsList[currCommKey].slice(leaderCommsList[currCommKey].indexOf("/")+1);

            if (leaderCommsList[currCommKey]=='Advocacy'){
                baseDashboardUrl = 'https://www.aamft.org/Advocacy/Family-Team-Dashboard.aspx?groupid=';
            }
            
            $('.section1 .nested-community .popover-container').after('<a href="' + baseDashboardUrl + leaderCommsList[currCommKey] +stateID+'" class="btn btn-primary pull-right" style="margin-bottom: 10px;">Network Dashboard</a>');
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
