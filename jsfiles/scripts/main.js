// JavaScript Document

/*********** Player level constants and attributes are initialized here ********************/

var isSliderDisable = false;

var gModLen, gLessonLen, gTopLen = 0,
    gPageLen;
window.isReviewMode = false;
var switchTranscriptVariable='';
var gCurrMod = 0,
    gCurrLess = 0,
    gCurrTop = 0,
    gCurrPage = 0;

    var oral_tube_MenuArr = ["M1L0T1P16_1", "M1L0T1P16_2", "M1L0T1P16_3", "M1L0T1P16_4"];
    var page_14 = ["M1L0T1P14_2", "M1L0T1P14_3"];
    var page_32 = ["M1L0T1P32_4", "M1L0T1P32_3","M1L0T1P32_1", "M1L0T1P32_2" ];
    var page_45 = ["M1L0T1P45_1", "M1L0T1P45_2", "M1L0T1P45_3"];


var lPageRefPath = "";

var gTotalPages, gCurrPageNumg, gCurrPageInTopic = 1;

var gTotalLessons;

var currentAudioObj = 0;

var gCurrSndObj, gCurrVdoObj;

var isAudioStreamPlaying = false;

var gAssessmentAttempt = 0; //Count assessment attempt

var playPauseAudioStream = false;

var IsScrom = true;

var gRandomQuestionArr = [];

var isBackBtnEnable = false;

var isNextBtnEnable = false;

var isTransEnable = false;

var isAudioEnable = true;

var isCourseLogoPresent = true;

var pageObj = "";

var assesmentScore = -1;

var senarioQScreen7 = false;

var kcArray = [];

var kcUserSelectionArray = [];

var kcAlreadyAttempted = false;

//Next enable for assessmeny lock

var assessmentNextBtn = [];

var isToolEnable = true;



var gameArray = [];

var gameUserSelectionArray = [];

var gameAlreadyAttempted = false;

var gPageXMLObj; /**for knowledgecheck**/

//var gModCompArr, gLessonCompArr, gTopCompArr, gPagesCompArr;

var gCompModArr = new Array(),
    gCompLessArr = new Array(),
    gCompTopArr = new Array(),
    gCompPageArr = new Array();

var arrVisited;

var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);

var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

var ver = iOSversion();







var gModuleArr = new Array();

var iPadAudioPlayed = false;

var isPreloadPlayed = false;

var isAudioPlaying = false;

/* Nikhil A. */

var gPageCompCondArr = new Array();

var gPageTrackingArr = new Array();

var pageTracking;

var gPageCompCondVal = 0;

var isBookMarkPopupShown = false;

var ua = navigator.userAgent.toLowerCase();

var isiPAD = ua.indexOf("ipad") > -1; //&& ua.indexOf("mobile");

var isInActivity = false;

var _currAudioPlayingPath;

var gItemAudioPath = [];

var checkblinkGlwBtn;

var bAudioDisable = ""; //To hold the information about page audio

var bAudioMute = false; //To hold the state of volume control

var bAudioPlaying = false; //To hold current audio state (play / pause)



var bPageStateChange = true; //To hold any kind of change (e.g. page change, menu open, popup open etc.)

var bAudioCompleted = true;

var isIntroPage = false;

var isPaused = false

//For audio sync variables

var currCue = 0;

var currCueVid = 0;

var updateContentArray = [];

var gAudioId = "";

var isAndroid = (/android/i.test(navigator.userAgent.toLowerCase()));

var is7Inch = false;

var is10Inch = false;

var isIpad2 = false;



//for video steplist template

var videoPath = "";

var videoObject = null;

var iamclicked = false;

var clickedStep;



var __curConCordVisit = 0;

var __curMateoVisit = 0;

var __tempcaseStudyvisited = 0;

var __alreadyVisitedFourIcon = 0;

var __visistedPage = false;

var __alreadyVisitedBaby = false;



var __videoPage = false;



var __backBtn = false;

var __backPageId = 0;



var __backBtnEnable = false;





var __tabIndex = 0;

var __indexTab = 0;

var __clickIndex = 0;

var __indexClick = 0;



//Assesments score variables

var assessment1Score = -1;

var assessment2Score = -1;

var assessment3Score = -1;

var assessmentScore = -1;



var assesmentInReviewMode = false;

var assessmentArray = [];

var transcriptDisable = 'f'; // It will update transcript button's status. 't' for disable transcript and 'f' will get chance to other condition to update state enable/disable.
var currentPageType;


var menuOpened = false;

var exitOpened = false;

var searchStr = "";

var isAndroid2 = (/android/i.test(navigator.userAgent.toLowerCase()));



var isProgressBarDisabled;

var nextBtnClik = false;

var backBtnClik = false;



var assessment_score = [0, 0, 0, 0, 0];

var correctQueCounter = 0;





var visitHome = 0;

var isPageCompletionOnPageLoad;

var isFresher = false;

var isPreTest = true;

var preTetAssessmentArray = new Array();

var preTetIDArray = new Array();

var postTetAssessmentArray = new Array();

var postTetIDArray = new Array();

var gAssessmentType = "";

var gIsAssessmentCompleted = false;

var gStartAssessmet = false;

var videoPlaying = false
    //function for home /landing page

startAudioFunc();
stopAudioFunc();

function fnLoadHome() {

    //$('#TopicTitleFrame').html("");

    //$('#pgTitleFrame').html("");

    //$('#contentFrame').html("");

    //$(".homeCover").remove();

    //$("<div class='homeCover'></div>").insertAfter("#contentFrame");

    //$('.homeCover').load('elements/homePage.html');

    // fnJumpToPageByID("M1L0T1P3");

    fnJumpToPageByID("M1L0T1P3");

}

function physicalExamForSignsOfShock(){
    for (var i = 0; i < physical_exam_signs_shock_MenuArr.length; i++) {
        if (gCompPageArr.indexOf(physical_exam_signs_shock_MenuArr[i]) != -1) {
            //console.log(physical_exam_signs_shock_MenuArr[i]);
            if(physical_exam_signs_shock_MenuArr[i]=="M1L0T1P10"){
                $("#TabItem0").addClass("viewedClick");
                //physical_exam_signs_shock_MenuArr_length++;
            }else if(physical_exam_signs_shock_MenuArr[i]=="M1L0T1P10_1"){
                $("#TabItem1").addClass("viewedClick");
                //physical_exam_signs_shock_MenuArr_length++;
            }else if(physical_exam_signs_shock_MenuArr[i]=="M1L0T1P10_2"){
                $("#TabItem2").addClass("viewedClick");
                //physical_exam_signs_shock_MenuArr_length++;
            }else if(physical_exam_signs_shock_MenuArr[i]=="M1L0T1P10_3"){
                $("#TabItem3").addClass("viewedClick");
                //physical_exam_signs_shock_MenuArr_length++;
            }
            //break;
        }
    }
}

function physicalExamForSignsOfShock2(){
    for (var j = 0; j < physical_exam_signs_shock2_MenuArr.length; j++) {
        if (gCompPageArr.indexOf(physical_exam_signs_shock2_MenuArr[j]) != -1) {
            //console.log(physical_exam_signs_shock_MenuArr[i]);
            if(physical_exam_signs_shock2_MenuArr[j]=="M1L0T1P11_1"){
                $(".popup1 #bullText1").addClass("visited");
            }else if(physical_exam_signs_shock2_MenuArr[j]=="M1L0T1P11_2"){
                $(".popup2 #bullText2").addClass("visited");
            }else if(physical_exam_signs_shock2_MenuArr[j]=="M1L0T1P11_3"){
                $(".popup3 #bullText3").addClass("visited");
            }else if(physical_exam_signs_shock2_MenuArr[j]=="M1L0T1P11_4"){
                $(".popup4 #bullText4").addClass("visited");
            }else if(physical_exam_signs_shock2_MenuArr[j]=="M1L0T1P11_5"){
                $(".popup5 #bullText5").addClass("visited");
            }
            //break;
        }
    }
}

function shockFourMainCases(){
    for (var k = 0; k < shock_four_main_case_MenuArr.length; k++) {
        if (gCompPageArr.indexOf(shock_four_main_case_MenuArr[k]) != -1) {
            //console.log(physical_exam_signs_shock_MenuArr[i]);
            if(shock_four_main_case_MenuArr[k]=="M1L0T1P35_1"){
                $("#TabItem0").addClass("viewed");
            }else if(shock_four_main_case_MenuArr[k]=="M1L0T1P35_2"){
                $("#TabItem1").addClass("viewed");
            }else if(shock_four_main_case_MenuArr[k]=="M1L0T1P35_3"){
                $("#TabItem2").addClass("viewed");
            }else if(shock_four_main_case_MenuArr[k]=="M1L0T1P35_4"){
                $("#TabItem3").addClass("viewed");
            }
            //break;
        }
    }
}

function shockTreatment(){
    for (var k = 0; k < shock_treatment_MenuArr.length; k++) {
        if (gCompPageArr.indexOf(shock_treatment_MenuArr[k]) != -1) {
            //console.log(physical_exam_signs_shock_MenuArr[i]);
            if(shock_treatment_MenuArr[k]=="M1L0T1P43_1"){
                $("#TabItem0").addClass("viewedClick");
            }else if(shock_treatment_MenuArr[k]=="M1L0T1P43_2"){
                $("#TabItem1").addClass("viewedClick");
            }else if(shock_treatment_MenuArr[k]=="M1L0T1P43_3"){
                $("#TabItem2").addClass("viewedClick");
            }else if(shock_treatment_MenuArr[k]=="M1L0T1P43_4"){
                $("#TabItem3").addClass("viewedClick");
            }
            //break;
        }
    }
}

function startAudioFunc() {
    //$(".zoom_close_btn").click(function(){
    $(document).on('click', '.zoom_close_btn', function(e) {
        e.preventDefault();
        fnPlayAudio();
    });
}

function stopAudioFunc() {
    $(document).on('click', '.zoom_btn', function(e) {
        e.preventDefault();
        fnPauseAudio();
    });
}

function clearAllTimeOut() {
    var id = window.setTimeout(function() {}, 0);

    while (id--) {
        window.clearTimeout(id); // will do nothing if no timeout with id is present
    }
}

function backBtnDisableEnableForReview() {
    var _getReviewStatue = assessmentObj.getUserReviewType();
    //console.log(_getReviewStatue);
    if (_getReviewStatue == true) {
        $('#clsMnuBtn, #clsReplay, #ToolBtn').css({
            "pointer-events": "none"
        });
        enableBackBtnClass();
    } else {
        $('#clsMnuBtn, #clsReplay, #clsBackBtn, #ToolBtn').css({
            "pointer-events": "none"
        });
        disableBackBtn();
    }
}

function disabledAllButtons() {
    $('#clsMnuBtn, #clsReplay, #clsBackBtn, #ToolBtn, #clsHelpBtn, #clsExitBtn, #clsAudioOnBtn, #id_sliderContainer, #clsPlayPauseBtn').css({
        "pointer-events": "none"
    });
}


function enabledAllButtons() {
    $('#clsMnuBtn, #clsReplay, #clsBackBtn, #ToolBtn, #clsHelpBtn, #clsExitBtn, #clsAudioOnBtn, #id_sliderContainer, #clsPlayPauseBtn').css({
        "pointer-events": "inherit"
    });
}

function fnLoadIntro() {

    $(".gridContainer").css({ "display": "none" });

    $(".courseIntro").css({ "display": "block" })

    $.get('pages/intro/intro.html', {}, function(data, status, xhr) {



        var a = window.location.href;

        var b = a.split("?")[0];

        var c = b.substr(0, b.lastIndexOf("/"))

        var updatedData = data.replace(/pages\/(images|css|js|assets)+/g, c + "/pages/$1");

        $(".courseIntro").html(updatedData);



    });


}


function glossaryFuncPageLevel() {

    $(document).off('click')
    $(document).on('click', '.glossarytag', function(e) {
        ///  alert("clicked..")
        /*   setTimeout(function () {
              $("#id_glosTitleText").addClass("titleCase");
  
          }, 400) */

        e.preventDefault();
        fnLoadGlossaryPopupPage($(this));
    });

    $(document).on('click', '.id_glosCloseBtn', function(e) {
        //console.log("close wqdsfsdf");
        e.preventDefault();
        disableHelpPopup();

        $(".glossaryPopup").remove();
    });


}

function clickViewMoreInfo() {
    $(document).on('click', '.clickview_icon', function(e) {
        e.preventDefault();

        // alert("here...")
        //if (isActive(this))
        fnLoadCaseInformation($(this));
    });
}

function fnMenuDisable() {
    $("#clsMnuBtn").css("opacity", "0.5");
    $("#clsMnuBtn").css("cursor", "default");
    $("#clsMnuBtn").addClass("clsMnuBtnDis");
}

function home_disable() {
    $("#clsHomeBtn").removeClass().addClass("clsDisHomeBtn");
}

function home_enable() {
    $("#clsHomeBtn").removeClass().addClass("clsEnaHomeBtn");
}

function fnHideBtn() {
    $("#clsPageNumber,#clsBackBtn,#clsNxtBtn").css({ "display": "none" });
}

function fnShowBtn() {
    $("#clsPageNumber,#clsBackBtn,#clsNxtBtn,#clsReplay").css({ "display": "block" });
}

function fnPageCompeletionOnLessonCompeltion() {

    for (var i = 0; i < gCompLessArr.length; i++) {

        var lLessonObj = fGetObjFromID(gCompLessArr[i], "Lesson");

        for (var k = 0; k < lLessonObj.Topics.length; k++) {

            fCheckandAppendToArr(gCompTopArr, lLessonObj.Topics[k].attr("ID"));

        }

    }

    for (var i = 0; i < gCompTopArr.length; i++) {

        var lTopicObj = fGetObjFromID(gCompTopArr[i], "Topic");

        for (var k = 0; k < lTopicObj.Pages.length; k++) {

            fCheckandAppendToArr(gCompPageArr, lTopicObj.Pages[k].attr("ID"));

        }

    }

}



function fnCreateXMLObjArr() {

    var moduleCounter, lessonCounter, topicCounter, pageCounter, totalPageCounter;

    moduleCounter = 0;

    totalPageCounter = 0;

    oXML.find("MODULE").each(function() {

        gModuleArr[moduleCounter] = $(this);

        gModuleArr[moduleCounter].Lessons = new Array();

        lessonCounter = 0;

        $(this).find("LESSON").each(function() {

            gModuleArr[moduleCounter].Lessons[lessonCounter] = $(this);

            gModuleArr[moduleCounter].Lessons[lessonCounter].Topics = new Array();

            topicCounter = 0;

            $(this).find("TOPIC").each(function() {

                gModuleArr[moduleCounter].Lessons[lessonCounter].Topics[topicCounter] = $(this)

                gModuleArr[moduleCounter].Lessons[lessonCounter].Topics[topicCounter].Pages = new Array();

                pageCounter = 0;

                $(this).find("PAGE").each(function() {

                    gModuleArr[moduleCounter].Lessons[lessonCounter].Topics[topicCounter].Pages[pageCounter] = $(this);

                    // Total page number will not count the page which will have "F" or "N" for attribute "SHOWINMENU"

                    if (String($(this).attr("SHOWINMENU")).toUpperCase() != "F" && String($(this).attr("SHOWINMENU")).toUpperCase() != "N") {

                        totalPageCounter++;

                    }

                    $(this).attr("PAGEDISPNO", totalPageCounter);

                    pageCounter++;

                });

                topicCounter++;

            });

            lessonCounter++;

        });

        moduleCounter++;

    });

    gTotalPages = totalPageCounter;

    gTotalLessons = lessonCounter;

    isPageCompletionOnPageLoad = oXML.find("isPageCompletionOnPageLoad").text().toLowerCase();

}



function fnCreatePreCacheArr() {

    var tempArr = new Array();

    var fileCounter = 0;

    oXML.find("PRELOADDATA").each(function() {

        $(this).find("PreloadFile").each(function() {

            tempArr[fileCounter] = $(this);

            fileCounter++;

        });

    });



    fnPreCacheData(tempArr);

    loadAssetsXml();

}



function fnPreCacheData(tempArr) {

    var idcnt = 0;

    for (var i = 0; i < tempArr.length; i++) {

        var tempObj = new Object();

        if (tempArr[i].attr("type") != "Audio") {

            tempObj.src = tempArr[i].attr("Path");

        }

        if (!(iOS && tempArr[i].attr("type") == "Audio")) {

            tempObj.id = idcnt;

            manifest[idcnt] = tempObj;

            idcnt++;

        }

    }

}



function isActive(obj) {

    return $(obj).hasClass("activcls");

}



function fnSliderOrProgressBar() /* This function is used to define Slider Behaviour (Slider or Progress Bar) */ {

    isProgressBarDisabled = oXML.find("DISABLEDSLIDER").text().toLowerCase();

    if (isProgressBarDisabled == "false" || isProgressBarDisabled == "f" || isProgressBarDisabled == false) {

        isProgressBarDisabled = false;

    } else if (isProgressBarDisabled == "true" || isProgressBarDisabled == "t" || isProgressBarDisabled == true) {

        isProgressBarDisabled = true;

    }

}
// Added by Develpoper to toggle the volume slider
//18-11-2022
function toggleVolumeSlider(){
    $('#id_slider-vertical').toggleClass('d-none');
}

function fnAddPlayerEvents() {

    fnSliderOrProgressBar(); /* Tarun */
    fnInitialize();

    playerToggleAciteClass();

    $("#clsNxtBtn").click(function(e) {
        if (isActive(this))
            fnGetPage("NEXT");
    });

    $("#ToolBtn").click(function() {
        closeHelpBtnFunc();
        if (isActive(this)) {
            fnTools();
        }

    });

    // $('.no-touch .closeContainer').hover(function(){

    // 	// $("#clsExitBtn").css({'background-position':'-32px 0'});

    // 	$("#clsBGText").css({'opacity': '1'});

    // 	$("#clsBG").css({'background': 'url("media/images/player/common/close_hover.png") no-repeat'});

    // }, function() {

    // 	$("#clsExitBtn").css({'background-position':''});

    // 	$("#clsBGText").css({'opacity': ''});

    // 	$("#clsBG").css({'background': ''});

    //

    // });

    /*$("#clsNxtBtn,#idNxtPatch").on("mouseover",function(){

    $(this).addClass('clsBlinkNxtBtn');

    	clearInterval(checkblinkGlwBtn);



    });

    /*$("#idNxtPatch").on("mouseover",function(){

    	clearInterval(checkblinkGlwBtn);

    	//$('#clsNxtBtn').removeClass('clsBlinkNxtBtn');

    	//$('#clsNxtBtn').removeClass('clsGlowNxtBtn');

    });*/

    /*$("#clsNxtBtn,#idNxtPatch").on("mouseout",function(){

    	//$('.clsGlowNxtBtn').toggleClass('clsBlinkNxtBtn');

    	//$('#clsNxtBtn').addClass('clsGlowNxtBtn');

    	//$('#clsNxtBtn').addClass('clsBlinkNxtBtn');

    	checkblinkGlwBtn = setInterval(blinkGlwBtn, 500);

    });*/



    $("#clsAudioOffBtn,#clsAudioOnBtn").click(function(e) {
        if (isActive(this))
        toggleVolumeSlider();
    });

    $("#clsMnuBtn").click(function(e) {
        if (isActive(this)) {
            fnLoadMenu();
        } else {
            disablePopup();
        }

    });
    $("#clsAudioOnBtn").hover(function() {
       // fnSoundOnOff();
      
    });

    $("#clsExitBtn").hover(function() {
       // $("#clsExitBtn").css({ "background": "url('media/images/new/exit.png') no-repeat", "background-position": "-32px 0" })
            //$("#clsBGText").css("display","block")
            //$("#clsBG").css("background","url('media/images/player/common/close_hover.png')")
    }, function() {
        $("#clsExitBtn").css({ "background": "", "background-position": "" })
            //$("#clsBGText").css("display","")
            //$("#clsBG").css("background","")
    })

    $("#clsExitBtn").click(function(e) {
        closeHelpBtnFunc();
        if ($("#ToolBtn").hasClass("ClsToolbtnSelected"))
        fnTools();
        if (isActive(this)) {

            var arrIOSVer = String(ver).split(',');

            if (parseInt(arrIOSVer[0]) == 8 && parseInt(arrIOSVer[1]) >= 0 && parseInt(arrIOSVer[1]) <= 2) {

                BVScorm_adlOnunload();

                alert("Close window from browser's exit button");

            } else {

                fnLoadExitPopup();

            }

        }

    });

    $("#searchBtn").click(function(e) {

        /*if(isActive(this))*/



        fnLoadSearchPopup();

        searchStr = $("#searchTextDiv").val()

        fnSearchActivity(searchStr)



    });

    $("#searchTextDiv").click(function(e) {
        if (isAndroid2)
            jQuery.event.remove(window, "resize", resizeFrame);

    });

    $("#searchTextDiv").keypress(function(e) {

        if (e.which == 13) /*the enter key code*/ {

            e.preventDefault();

            fnLoadSearchPopup();

            searchStr = $("#searchTextDiv").val()

            fnSearchActivity(searchStr);

        }

    });

    $("#clsHelpBtn").click(function(e) {
        if($("#ToolBtn").hasClass("ClsToolbtnSelected"))
        fnTools();
        if($(this).hasClass("active")){
            closeHelpBtnFunc();
        }else{
            if (isActive(this)) {
                switchTranscriptVariable= $('#transcripttext').html();
                fnLoadHelpPopup();
                //pauseVideoOnPopup();
            }
        }
    });
    // $("#ToolBtn").click(function(e) {
    //     closeHelpBtnFunc();
    //     // if(!$(this).hasClass("ClsToolbtnSelected"))
    //     // fnTools();
    //     if (isActive(this)) {
    //         fnTools();
    //       }
    // });
    $("#clsGlosBtn").click(function(e) {
        closeHelpBtnFunc();
        if (isActive(this))
            fnLoadGlossaryPopup();
    });

    $("#clsRefBtn").click(function(e) {
        closeHelpBtnFunc();
        if (isActive(this))
            fnLoadReferencesPopup();
    });

    $("#clsVideoRefBtn").click(function(e) {
        closeHelpBtnFunc();
        if (isActive(this))
            fnLoadVideoReferencesPopup();
    });
    $("#clsActivityRefBtn").click(function(e) {
        closeHelpBtnFunc();
        //if (isActive(this))
        fnLoadActivityPopup();
    });

    $("#clsInfo").click(function(e) {
        //if (isActive(this))
        fnLoadInfoPopup();
    });


    $("#clsBackBtn").click(function(e) {

        if ($("#clsBackBtn").hasClass("clsDisBackBtn")) {
            return;
        }
        volumeProgressState();
        if (isActive(this)) {

            if (isInActivity) {

                var lPageId = gModuleArr[gCurrMod].Lessons[gCurrLess].Topics[gCurrTop].Pages[gCurrPage].attr("ID");

                fnJumpToPageByID(lPageId)

            } else {

                fnGetPage("PREV");

            }

        }

    });

    $("#popupClose").click(function() {
        if (isActive(this))
            disablePopup();
    });

    $("#clsReplay").click(function() {
       
        closeHelpBtnFunc();
        volumeProgressState();
        if ($("#clsReplay").css("opacity") != 1) {

            return

        }

        if (isActive(this)) {

            if (isInActivity) {

                replayAudio();

            } else {

                var lPageId = gModuleArr[gCurrMod].Lessons[gCurrLess].Topics[gCurrTop].Pages[gCurrPage].attr("ID");

                fnJumpToPageByID(lPageId)

            }

        }



        //active next button when refresh

        //var n = gCompPageArr.indexOf(lPageId);

        var n = isInArray(lPageId, gCompPageArr);

        // console.log(lPageId+"::::"+n);



        setTimeout(function() {

            if (n == true) {

                //fnGlowNextBtn();

                fnDesiableNext(false)

            }

        }, 200);

    });





    function isInArray(value, array) {

        return array.indexOf(value) > -1;

    }



    $("#transcriptBtn").click(function() {

        // console.log(isActive(this));

        //   if (isActive(this)){

        // }

        fnTranscript();

        // dragElement($("#id_transcriptBox"));

        dragElement()

    });



    function dragElement() {

        /* $( "#id_transcriptBox" ).draggable({

        	containment: "parent"

        }); */



        $("#id_transcriptBox").draggable({

            containment: "parent"

        });

        $("#id_transcriptBox").resizable();



        $("#id_transcriptBox").resizable({

            maxHeight: 250,

            maxWidth: 950,

            minHeight: 120,

            minWidth: 170

        });





    }



    $("#id_transcriptClose").click(function() {

        //if(isActive(this))

        // fnTranscript();

        //setTranscriptButtonState("TRUE")

        $("#id_transcriptBox").hide();

        if (isTransEnable) {

            $("#transcriptBtn").removeClass("clsTransOffBtn");

            $("#transcriptBtn").addClass("clsTransOnBtn");

            $("#transcriptBtn span").html("TRANSCRIPT ON");

            //         $("#transcript_divider").hide();

            //         fnhideTranscript();

            isTransEnable = false;

        } else {

            // 				$(".ClsToolPop").css({"transform":"translateY(100%)"});

            // 				$(".ClsToolbtn ").removeClass("ClsToolbtnSelected");

            $("#transcriptBtn").removeClass("clsTransOnBtn");

            $("#transcriptBtn").addClass("clsTransOffBtn");

            $("#transcriptBtn span").html("TRANSCRIPT OFF");

            //         $("#transcript_divider").show();

            //         fnshowTranscript();

            isTransEnable = true;

        }



    });



    $("#clsReplayBtn").click(function(e) {
        replayAudio();
    });



    $("#clsPlayPauseBtn, .clsPause, .clsPlay").off("click");

    $("#clsPlayPauseBtn, .clsPause, .clsPlay").on("click", function(e) {

        if (!$('#clsPlayPauseBtn').hasClass("clsPlayDisable")) {

            isPaused = !isPaused;

            if (videoObjectId == null)

                videoPlaying = false;

            playPauseAudio();

        }

    });

    /**Commented for locking the transcript box : JIVAN**/

    //$( "#id_transcriptBox" ).draggable({ containment: ".pg-pageContent" });

    // $("#id_transcriptBox").draggable({

    //      containment: ".pg-pageContent",

    // 		cursor: "crosshair"

    //  });

    //  //setTimeout(function(){$("#id_transcriptBox").droppable("disable");},1000);

    //  $("#id_transcriptBox").mousedown(function () {

    //      $('#id_transcriptBox').css('cursor', 'pointer');

    //  });

    //  $("#id_transcriptBox").mouseup(function () {

    //      $('#id_transcriptBox').css('cursor', 'default');

    //  });



}





//For Creating menu pop up

function loadPopup() {

    /* $( ".menubg" ).animate({

    opacity: 0.7}, 200); */

    var str = "<div class='menubg'></div>"

    /* $('.player-container').prepend(str); */



    var options = { direction: "down" }

    //loads popup only if it is disabled

    if ($(".menuCover").data("state") == 0) {

        $(".menuCover").css({

            // "opacity": "0.7"

        });

        /*$(".bgPopup").fadeIn("medium");  */

        //$( ".menuCover" ).effect( "slide", options, 500, showmenuCover );

        $(".menuCover").show()

        /*$(".menuCover").click(function () {

            //disablePopup();// Use to hide menu click on screen

        })*/

        $(".menuCover").data("state", 1);

    }

}

function showmenuCover() {
    $(".MenuPopup").fadeIn("medium");

}

function disablePopup() {

    menuOpened = false;
    $('#clsMnuBtn').removeClass("activMenu").addClass("deactivMenu");
    fnPlayAudio();
    playerToggleAciteClass();
    var options = { direction: "left", mode: "hide" }
    if ($(".menuCover").data("state") == 1) {
        $(".menubg").remove();
        $(".MenuPopup").fadeOut("medium");
        $(".menuCover").data("state", 0);
        $(".MenuPopup").remove();
        //$( ".menuCover" ).effect( "slide", options, 500, hidemenuCover );
        hidemenuCover()
    }
    // Below line is added for 508 accessibility.
    update508ForPlayerCtrl('#clsExitBtn');
}



function hidemenuCover() {

    $(".menuCover").remove();

}



function centerPopup() {

    var winw = $(window).width();

    var winh = $(window).height();

    var popw = $('.Popup').width();

    var poph = $('.Popup').height();

    $(".Popup").css({ "position": "absolute", "top": 20, "left": winw / 2 - popw / 2 });

}



function fnLoadMenu() {
    closeHelpBtnFunc();
    menuOpened = true;
    if ($("#clsMnuBtn").css("opacity") != 1) {
        return;

    }
    playerToggleAciteClass();
    fnPauseAudio();
    //$("<div class='menuCover'><div class='MenuPopup'></div></div>").insertAfter('#contentFrame');
    $("<div class='menuCover'><div class='MenuPopup'></div></div>").insertAfter('.gridContainer');
    $(".menuCover").data("state", 0);
    $('#clsMnuBtn').removeClass("deactivMenu").addClass("activMenu");
    //centerPopup();
    loadPopup();
    /*$.get('menu.html', {}, function(data, status, xhr) {

    	var a = window.location.href;

    	var b = a.split("?")[0];

    	var c = b.substr(0, b.lastIndexOf("/"))

    	var updatedData = data.replace(/media\/(images|css|js|assets)+/g, c+"/media/$1");

    	//updatedData = data.replace(/css\/(images|css|js|assets)+/g, c+"/css/$1");

    	$('.MenuPopup').html(updatedData);

    	//perCachePageImagesAudio();

    });*/
    $('.MenuPopup').load('elements/menu.html');
}



//Exit Pop

function loadExitPopup() {

    var options = {}
        //loads popup only if it is disabled

    if ($(".bgPopup").data("state") == 0) {
        $(".bgPopup").css({
            //"opacity": "0.7"
        });
        /*$(".bgPopup").fadeIn("medium");*/
        //$( ".bgPopup" ).effect( "slide", options, 500, showExitPopUp );
        $(".bgPopup").show()
        showExitPopUp()
        $(".bgPopup").data("state", 1);
    }
}

function showExitPopUp() {
    $(".ExitPopup").fadeIn("medium");
}

function hideExitPopUp() {
    $(".bgPopup").remove();
}

function disableExitPopup() {

    exitOpened = false;

    fnPlayAudio();

    var options = { mode: "hide" }

    if ($(".bgPopup").data("state") == 1) {

        /*$(".bgPopup").fadeOut("medium");  */

        $(".ExitPopup").fadeOut("medium");

        $(".bgPopup").data("state", 0);

        $(".ExitPopup").remove();

        //$( ".bgPopup" ).effect( "slide", options, 500, hideExitPopUp);

        hideExitPopUp()

    }



    // Below lines are added for 508 accessibility.

    if (isIntroPage) {

        var arrTabIndexUpdate = ['#clsIntroExitBtn', '#clsReplyBtn', '.CLSSSKIPBTN'];

        updateTabIndex(arrTabIndexUpdate, '.CLSSSKIPBTN');

    } else {

        update508ForPlayerCtrl('#clsExitBtn');

    }

}



function centerExitPopup() {

    var winw = $(window).width();

    var winh = $(window).height();

    var popw = $('.ExitPopup').width();

    var poph = $('.ExitPopup').height();

    $(".ExitPopup").css({

        "position": "absolute",

        "top": 0,

        //"left" : winw/2-popw/2

        "left": 0

    });

}



function fnLoadExitPopup() {

    exitOpened = true;

    if (IsScrom) {

        fnSetCoreData();

    }

    fnPauseAudio();



    $("<div class='ExitPopup'></div><div class='bgPopup'></div>").insertAfter('.clsPreloader');

    $(".bgPopup").data("state", 0);

    centerExitPopup();

    loadExitPopup();

    /*$.get('exit.html', {}, function(data, status, xhr) {

    	var a = window.location.href;

    	var b = a.split("?")[0];

    	var c = b.substr(0, b.lastIndexOf("/"))

    	var updatedData = data.replace(/media\/(images|css|js|assets)+/g, c+"/media/$1");

    	$('.ExitPopup').html(updatedData);

    	//perCachePageImagesAudio();

    });*/



    $('.ExitPopup').load('elements/exit.html');

}

function fnLoadGlossaryPopupPage(aCurrent) {
    fnPauseAudio();
    $(".glossaryPopup").remove();
    //console.log(aCurrent);
    //fnPauseAudio();
    $("<div class='glossaryPopup'></div>").insertAfter('.gridContainer');
    /* $.get('elements/glossary/glossary.html', {}, function(data, status, xhr) {
     	var a = window.location.href;
     	var b = a.split("?")[0];
     	var c = b.substr(0, b.lastIndexOf("/"))
     	var updatedData = data.replace(/media\/(images|css|js|assets)+/g, c+"/media/$1");
     	$('.HelpPopup').html(updatedData);
     	//perCachePageImagesAudio();
     }); */
     
    var _getDesc = aCurrent.attr("textDesc");
    //console.log(_getDesc);
    var _getHeading = aCurrent.html();
    var _getCurId = "";

    if (aCurrent.attr("acur") != null || aCurrent.attr("acur") != undefined) {
        aCurrent.addClass("visited");
    }

    if (aCurrent.attr("glossaryTitle") != null || aCurrent.attr("glossaryTitle") != undefined) {
        _getHeading = aCurrent.attr("glossaryTitle");
    } else {
        _getHeading = aCurrent.html();
    }

    if (aCurrent.attr("aid") != null || aCurrent.attr("aid") != undefined) {
        _getCurId = aCurrent.attr("aid");
    } else {
        _getCurId = "";
    }



    //console.log(_getDesc);
    var __html = '<div class="popupglossasryCnt"><div id="helptopbar"><div id="id_glosTitleText" class="titleCase '+_getCurId+'">' + _getHeading + '</div><div class="close_txt"><span id="clsText">Close</span></div><div id="id_glosCloseBtn" class="id_glosCloseBtn" title="Close"></div></div><div class="glossaryCntTxt" id='+_getCurId+'>' + _getDesc + '</div></div>';

    $('.glossaryPopup').html(__html);
    //$('.HelpPopup').load('elements/glossary_old.html');
}

function fnLoadHelpPopup() {
    if ($("#clsHelpBtn").css("opacity") != 1) {
        return

    }
    $("#clsHelpBtn").addClass("active");
    //$(".gridContainer").addClass("helpblur");
    fnPauseAudio();
    $("<div class='HelpPopup'></div><div class='bgHelpPopup'></div>").insertAfter('.gridContainer');
    $(".bgHelpPopup").data("state", 0);
    centerHelpPopup();
    loadHelpPopup();

    $('.HelpPopup').load('elements/help.html', function() {
        // $(".prepare").find('span').html(helpPageTitle);
        $('.HelpPopup').fadeIn();
    });
}


function closeHelpBtnFunc(){
    disableHelpPopup();
    $('#id_transcriptBox').removeAttr("style");
    $('#transcriptHelp').attr("style", "display: none");
    $(".pg-pageContent").show();

    $("#clsHelpBtn").removeClass("active");
    $("#clsMnuBtn").css({ "pointer-events": "all" })
    $("#clsHelpBtn").css({ "pointer-events": "all" })
    $("#clsExitBtn").css({ "pointer-events": "all" })
    $("#id_sliderContainer").css({ "pointer-events": "all" })
    $("#ToolBtn").css({ "pointer-events": "all" })
    $("#clsPlayPauseBtn").css({ "pointer-events": "all" })
    $("#clsReplay").css({ "pointer-events": "all" })
    $("#transcriptBtn").css({ "pointer-events": "all" })
    $("#clsAudioOffBtn").css({ "pointer-events": "all" })
    $("#clsAudioOnBtn").css({ "pointer-events": "all" })
    $("#clsBackBtn").css({ "pointer-events": "all" })
    $("#clsNxtBtn").css({ "pointer-events": "all" })
    $("#contentContainer").css({ "opacity": "1" })
}




function fnLoadGlossaryPopup() {
    if ($("#clsGlosBtn").css("opacity") != 1) {
        return
    }
    fnPauseAudio();
    $("<div class='HelpPopup'></div><div class='bgHelpPopup'></div>").insertAfter('.gridContainer');
    $(".bgHelpPopup").data("state", 0);
    centerHelpPopup();
    loadHelpPopup();
    /*  $.get('elements/glossary.html', {}, function(data, status, xhr) {
    	var a = window.location.href;
    	var b = a.split("?")[0];
    	var c = b.substr(0, b.lastIndexOf("/"))
    	var updatedData = data.replace(/media\/(images|css|js|assets)+/g, c+"/media/$1");
    	$('.HelpPopup').html(updatedData);
    	//perCachePageImagesAudio();
    });
*/
    // $('.HelpPopup').load('elements/glossary.html');
    $('.HelpPopup').load('elements/glossary/glossary.html');
}


function fnLoadCaseInformation(aEvent) {
    if ($("#clsGlosBtn").css("opacity") != 1) {
        return
    }
    var _currentFile = '';
    fnPauseAudio();
    $(".HelpPopup").remove();
    $("<div class='HelpPopup'></div><div class='bgHelpPopup'></div>").insertAfter('.gridContainer');
    $(".bgHelpPopup").data("state", 0);
    centerHelpPopup();
    loadHelpPopup();
    if (aEvent.attr("aid") == "1") {
        _currentFile = 'elements/caseinfo/mateo.html';
    } else {
        _currentFile = 'elements/caseinfo/concord.html';
    }
    $('.HelpPopup').load(_currentFile);
}

function fnLoadHomePopup() {
    fnPauseAudio();
    $("<div class='HelpPopup'></div><div class='bgHelpPopup'></div>").insertAfter('.gridContainer');
    $(".bgHelpPopup").data("state", 0);
    centerHelpPopup();
    loadHelpPopup();
    $('.HelpPopup').load('elements/home/home.html');
}

function fnLoadReferencesPopup() {
    if ($("#clsRefBtn").css("opacity") != 1) {
        return
    }

    fnPauseAudio();
    $("<div class='HelpPopup'></div><div class='bgHelpPopup'></div>").insertAfter('.gridContainer');
    $(".bgHelpPopup").data("state", 0);
    centerHelpPopup();
    loadHelpPopup();
    /*$.get(lPageRefPath, {}, function(data, status, xhr) {
    	var a = window.location.href;
    	var b = a.split("?")[0];
    	var c = b.substr(0, b.lastIndexOf("/"))
    	var updatedData = data.replace(/media\/(images|css|js|assets)+/g, c+"/media/$1");
    	$('.HelpPopup').html(updatedData);
    	//perCachePageImagesAudio();
    });*/
    $('.HelpPopup').load('elements/references.html');
}



function fnLoadVideoReferencesPopup() {

    if ($("#clsVideoRefBtn").css("opacity") != 1) {
        return
    }
    fnPauseAudio();
    $("<div class='HelpPopup'></div><div class='bgHelpPopup'></div>").insertAfter('.gridContainer');
    $(".bgHelpPopup").data("state", 0);
    centerHelpPopup();
    loadHelpPopup();
    /*$.get(lPageRefPath, {}, function(data, status, xhr) {
    	var a = window.location.href;
    	var b = a.split("?")[0];
    	var c = b.substr(0, b.lastIndexOf("/"))
    	var updatedData = data.replace(/media\/(images|css|js|assets)+/g, c+"/media/$1");
    	$('.HelpPopup').html(updatedData);
    	//perCachePageImagesAudio();
    });*/
    $('.HelpPopup').load('elements/videoreferences.html');
}

function fnLoadActivityPopup() {
    console.log("activity click");
    fnPauseAudio();
    $("<div class='HelpPopup'></div><div class='bgHelpPopup'></div>").insertAfter('.gridContainer');
    $(".bgHelpPopup").data("state", 0);
    centerHelpPopup();
    loadHelpPopup();

    $('.HelpPopup').load('elements/activity/activity.html', function() {
        //$('.tabLoadContent').load('pages/Topic01/T01P92.html');
    });
}

function fnLoadInfoPopup() {

    if ($("#clsInfo").css("opacity") != 1) {
        return
    }
    fnPauseAudio();
    $("<div class='HelpPopup'></div><div class='bgHelpPopup'></div>").insertAfter('.gridContainer');
    $(".bgHelpPopup").data("state", 0);
    centerHelpPopup();
    loadHelpPopup();
    $('.HelpPopup').load('elements/info.html');
}



function fnLoadSearchPopup() {

    /* if($("#clsRefBtn").css("opacity") != 1 ){

    	return

    } */

    fnPauseAudio();

    //$("<div class='HelpPopup'></div><div id='menuPatchBg'/><div class='bgHelpPopup'></div>").insertAfter('.gridContainer');

    $("<div class='HelpPopup'></div><div class='bgHelpPopup'></div>").insertAfter('.gridContainer');

    $(".bgHelpPopup").data("state", 0);

    centerHelpPopup();

    loadHelpPopup();

    $('.HelpPopup').load('elements/search.html');

}



function loadHelpPopup() {

    var options = {}

    //loads popup only if it is disabled

    if ($(".bgHelpPopup").data("state") == 0) {

        $(".bgHelpPopup").css({

            "opacity": "0.1"

        });

        /*$(".bgPopup").fadeIn("medium");

		$( ".bgHelpPopup" ).effect("progress", options, 300, showHelpPopUp);*/

        showHelpPopUp();

        $(".bgHelpPopup").data("state", 1);

    }

}



function showHelpPopUp() {

    $(".HelpPopup").fadeIn();

}



function hideHelpPopUp() {

    $(".bgHelpPopup").remove();

}



function disableHelpPopup() {

    $("#clsHelpBtn").removeClass("active");
    fnPlayAudio();

    var options = { mode: "hide" }

    if ($(".bgHelpPopup").data("state") == 1) {

        /*$(".bgPopup").fadeOut("medium");  */

        $(".HelpPopup").fadeOut("medium");

        $(".bgHelpPopup").data("state", 0);

        $(".HelpPopup").remove();

        $(".bgHelpPopup").effect("slide", options, 300, hideHelpPopUp);

    }



    // Below line is added for 508 accessibility.

    update508ForPlayerCtrl('#clsExitBtn');

}



function centerHelpPopup() {

    var winw = $(window).width();

    var winh = $(window).height();

    var popw = $('.HelpPopup').width();

    var poph = $('.HelpPopup').height();

    $(".HelpPopup").css({

        "position": "absolute",

        "top": 0,

        "left": 0

    });

}

function gnGetPage10() {

    var lCurrPgNum, lCurrTopNum, lCurrLessNum, lCurrModNum;

    lCurrPgNum = gCurrPage;

    lCurrTopNum = gCurrTop;

    lCurrLessNum = gCurrLess;

    lCurrModNum = gCurrMod;

    var lPageId = "M1L0T1P9";

    fnJumpToPageByID(lPageId);

}

function gnGetPage11() {

    var lCurrPgNum, lCurrTopNum, lCurrLessNum, lCurrModNum;

    lCurrPgNum = gCurrPage;

    lCurrTopNum = gCurrTop;

    lCurrLessNum = gCurrLess;

    lCurrModNum = gCurrMod;

    var lPageId = "M1L0T1P10";

    fnJumpToPageByID(lPageId);



}

function gnGetPage10_0() {

    var lCurrPgNum, lCurrTopNum, lCurrLessNum, lCurrModNum;

    lCurrPgNum = gCurrPage;

    lCurrTopNum = gCurrTop;

    lCurrLessNum = gCurrLess;

    lCurrModNum = gCurrMod;

    var lPageId = "M1L0T1P10_1";

    fnJumpToPageByID(lPageId);



}

function gnGetPage12() {

    var lCurrPgNum, lCurrTopNum, lCurrLessNum, lCurrModNum;

    lCurrPgNum = gCurrPage;

    lCurrTopNum = gCurrTop;

    lCurrLessNum = gCurrLess;

    lCurrModNum = gCurrMod;

    var lPageId = "M1L0T1P11";

    fnJumpToPageByID(lPageId);



}

function gnGetPage13() {

    var lCurrPgNum, lCurrTopNum, lCurrLessNum, lCurrModNum;

    lCurrPgNum = gCurrPage;

    lCurrTopNum = gCurrTop;

    lCurrLessNum = gCurrLess;

    lCurrModNum = gCurrMod;

    var lPageId = "M1L0T1P12";

    fnJumpToPageByID(lPageId);



}

function gnGetPage14() {

    var lCurrPgNum, lCurrTopNum, lCurrLessNum, lCurrModNum;

    lCurrPgNum = gCurrPage;

    lCurrTopNum = gCurrTop;

    lCurrLessNum = gCurrLess;

    lCurrModNum = gCurrMod;

    var lPageId = "M1L0T1P13";

    fnJumpToPageByID(lPageId);



}

function gnGetPage15() {

    var lCurrPgNum, lCurrTopNum, lCurrLessNum, lCurrModNum;

    lCurrPgNum = gCurrPage;

    lCurrTopNum = gCurrTop;

    lCurrLessNum = gCurrLess;

    lCurrModNum = gCurrMod;

    var lPageId = "M1L0T1P14";

    fnJumpToPageByID(lPageId);





}



function backBtn() {

    console.log(__backPageId);

    var lCurrPgNum, lCurrTopNum, lCurrLessNum, lCurrModNum;

    lCurrPgNum = gCurrPage;

    lCurrTopNum = gCurrTop;

    lCurrLessNum = gCurrLess;

    lCurrModNum = gCurrMod;

    //var lPageId = "M1L0T1P14";

    fnJumpToPageByID(__backPageId);

    $(".back-btn").hide();

    $("#topFrame .home-btn").show();

}

function disableNextBtn() {
    $("#clsNxtBtn").removeClass("clsEnaNxtBtn");
    $("#clsNxtBtn").addClass("clsDisNxtBtn");
    $("#clsNxtBtn").off("click");
}

function enableNextBtn() {
    $("#clsNxtBtn").addClass("clsEnaNxtBtn");
    $("#clsNxtBtn").removeClass("clsDisNxtBtn");
    $("#clsNxtBtn").on("click");
}

function disableBackBtn() {
    $("#clsBackBtn").removeClass("clsEnaBackBtn");
    $("#clsBackBtn").addClass("clsDisBackBtn");
    $("#clsBackBtn").off("click");
}

function enableBackBtnClass() {
    $("#clsBackBtn").addClass("clsEnaBackBtn");
    $("#clsBackBtn").removeClass("clsDisBackBtn");
    $("#clsBackBtn").on("click");
}

function fnGetPage(lCase) {

    if (gModuleArr[gCurrMod].Lessons[gCurrLess].Topics[gCurrTop].Pages[gCurrPage].attr("ISNEXTPAGEASSESSMENT") == "T" && isAssessmentLock && lCase == "NEXT") {

        //if assessment lock and click on next button on previous page of assessment then open menu.

        if (fnCheckAssessmentPageLock()) {

            $("#clsMnuBtn").click();

            return;

        } else {

            //all page visited

        }

    }

    fnResetAudioProgressBar();

    if ($("#jplayerPlay").hasClass("jp-play-deactive")) {

        $("#jplayerPlay").addClass("jp-play");

        $("#jplayerPlay").removeClass("jp-play-deactive");

    }



    $('#contentFrame').html("");

    $('#contentFrame').empty();

    var lCurrPgNum, lCurrTopNum, lCurrLessNum, lCurrModNum;

    lCurrPgNum = gCurrPage;

    lCurrTopNum = gCurrTop;

    lCurrLessNum = gCurrLess;

    lCurrModNum = gCurrMod;

    switch (lCase) {

        case "SAME":

            break;

        case "NEXT":
            enabledAllButtons();

            $("#id_transcriptBox #transcripttext").html("");

            gCurrPageNum++;

            var lPageId = gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics[lCurrTopNum].Pages[lCurrPgNum].attr("ID");

            /** PAGE 14 */
            if(  ( !prevPageRedirect ) && isInArray(lPageId, page_14) ){
                var nextToVisit = ""; 
                $.each(page_14, function(i, val){
                    if(nextToVisit == '' && gCompPageArr.indexOf(val) == -1){
                        nextToVisit = val;
                    }
                });
                fnJumpToPageByID(nextToVisit ? nextToVisit : 'M1L0T1P15');
                return;
            }            
            // jumpToNextPageOfMulti(page_14, 'M1L0T1P15');
            /** PAGE 32 */
            if(  ( !prevPageRedirect ) && isInArray(lPageId, page_32) ){
                var nextToVisit = ""; 
                $.each(page_32, function(i, val){
                    if(nextToVisit == '' && gCompPageArr.indexOf(val) == -1){
                        nextToVisit = val;
                    }
                });
                fnJumpToPageByID(nextToVisit ? nextToVisit : 'M1L0T1P33');
                return;
            }            
            // jumpToNextPageOfMulti(page_32, 'M1L0T1P13');
            /** PAGE 45 */
            if(  ( !prevPageRedirect ) && isInArray(lPageId, page_45) ){
                var nextToVisit = ""; 
                $.each(page_45, function(i, val){
                    if(nextToVisit == '' && gCompPageArr.indexOf(val) == -1){
                        nextToVisit = val;
                    }
                });
                fnJumpToPageByID(nextToVisit ? nextToVisit : 'M1L0T1P46');
                return;
            }            
            // jumpToNextPageOfMulti(page_45, 'M1L0T1P46');            


            //  alert("NEXT" + lPageId);

            var _getPreviousBookMarkPage = assessmentObj.getBookmarkPage();
            console.log("NEXT ",_getPreviousBookMarkPage);
            if (_getPreviousBookMarkPage != "") {
                fnJumpToPageByID(_getPreviousBookMarkPage);
                $("#clsPageNumber").show();
                assessmentObj.resetBookMarkPage();
            } else {

                    if (gStartAssessmet) {
                        if (gCurrQuestionCnt >= gShowQuestionCnt) { //Once All question shown
                            for (var i = 1; i < gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics[lCurrTopNum].Pages.length; i++) {
                                if (gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics[lCurrTopNum].Pages[i].attr("ISSKILLCHECK") != "Y") { // Find Result page ID
                                    var lPageId = gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics[lCurrTopNum].Pages[i].attr("ID");
                                    break;
                                }
                            }
                            fnJumpToPageByID(lPageId);
                        } else {
                            var lPageId = gRandAssessmentQustArr[gCurrQuestionCnt];
                            gCurrQuestionCnt++;
                            fnJumpToPageByID(lPageId);
                        }
                    } else if (lCurrPgNum < gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics[lCurrTopNum].Pages.length - 1) {
                        lCurrPgNum++;
                        var lPageId = gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics[lCurrTopNum].Pages[lCurrPgNum].attr("ID");
                        fnJumpToPageByID(lPageId)
                    } else {
                        if (lCurrTopNum < gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics.length - 1) {
                            lCurrTopNum++;
                            lCurrPgNum = 0;
                            var lPageId = gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics[lCurrTopNum].Pages[lCurrPgNum].attr("ID");

                            fnJumpToPageByID(lPageId);
                        } else if (lCurrLessNum <= gModuleArr[lCurrModNum].Lessons.length - 1) {
                            lCurrLessNum++;
                            lCurrTopNum = 0;
                            lCurrPgNum = 0;
                            //call home page after lesson complete

                            //fnLoadHome();
                            var lPageId = gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics[lCurrTopNum].Pages[lCurrPgNum].attr("ID");
                            fnJumpToPageByID(lPageId);

                        } else if (lCurrModNum < gModuleArr.length - 1) {
                            lCurrModNum++;
                            lCurrLessNum = 0;
                            lCurrTopNum = 0;
                            lCurrPgNum = 0;
                            var lPageId = gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics[lCurrTopNum].Pages[lCurrPgNum].attr("ID");
                            fnJumpToPageByID(lPageId)
                        }


                    }
                // console.log("Next ::: "+lPageId);
                // if(lPageId=="M1L0T1P0" || lPageId=="M1L0T1P1" || lPageId=="M1L0T1P2"){
                // 	$("#topFrame").addClass("topFrame");
                // }else{
                // 	$("#topFrame").removeClass("topFrame");
                // }

                if (lPageId == "M1L0T1P0" || lPageId == "M1L0T1P1" || lPageId == "M1L0T1P2" || lPageId == "M1L0T1P3" || lPageId == "M1L0T1P4" || lPageId == "M1L0T1P5" || lPageId == "M1L0T1P6" || lPageId == "M1L0T1P7" || lPageId == "M1L0T1P8" || lPageId == "M1L0T1P9" || lPageId == "M1L0T1P10" || lPageId == "M1L0T1P11" || lPageId == "M1L0T1P12" || lPageId == "M1L0T1P13" || lPageId == "M1L0T1P14") {
                    //$("#topFrame").addClass("topFrame");
                    $("#topFrame .home-btn").hide();
                    $("#contentContainer").removeClass("sugar");
                    if (__backBtnEnable == true) {
                        $("#topFrame .back-btn").show();
                    }
                } else {
                    $("#topFrame .home-btn").show();
                    $("#contentContainer").addClass("sugar");
                    $("#topFrame .back-btn").hide();
                    __backPageId = lPageId;
                }

            }





            break;

        case "PREV":
            enabledAllButtons();
            $("#id_transcriptBox #transcripttext").html("");

            var currPageId = gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics[lCurrTopNum].Pages[lCurrPgNum].attr("ID");

            console.log(currPageId, "currPageId....")

            console.log(currPageId == "M1L0T1P47");

            if (currPageId == "M1L0T1P16") {

                if (__alreadyVisitedFourIcon == 1) {

                    __alreadyVisitedFourIcon = 2;

                }

                //fnJumpToPageByID("M1L0T1P16");

            }
            /*    if (currPageId == "M1L0T1P47") {

                   console.log("page jump " + lPageId);

                   fnJumpToPageByID("M1L0T1P40");

                   break;

               } */


            if (gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics[lCurrTopNum].Pages[lCurrPgNum].attr("PREVPAGE") != "" && gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics[lCurrTopNum].Pages[lCurrPgNum].attr("PREVPAGE") != undefined) {

                var lPageId = gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics[lCurrTopNum].Pages[lCurrPgNum].attr("PREVPAGE");

            } else {

                if (lCurrPgNum > 0) {

                    lCurrPgNum--;

                } else {

                    if (lCurrTopNum > 0) {

                        lCurrTopNum--;

                    } else {

                        if (lCurrLessNum > 0) {

                            lCurrLessNum--;

                        } else if (lCurrModNum > 0) {

                            lCurrModNum--;

                            lCurrLessNum = gModuleArr[lCurrModNum].Lessons.length - 1;

                        }

                        lCurrTopNum = gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics.length - 1;

                    }

                    lCurrPgNum = gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics[lCurrTopNum].Pages.length - 1;

                }

                gCurrPageNum--;



                var lPageId = gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics[lCurrTopNum].Pages[lCurrPgNum].attr("ID");

            }

            console.log()

            if (lPageId == "M1L0T1P0" || lPageId == "M1L0T1P1" || lPageId == "M1L0T1P2" || lPageId == "M1L0T1P3" || lPageId == "M1L0T1P4" || lPageId == "M1L0T1P5") {
                //$("#topFrame").addClass("topFrame");
                $("#topFrame .home-btn").hide();
                $("#contentContainer").removeClass("sugar");
                if (__backBtnEnable == true) {
                    $("#topFrame .back-btn").show();
                }
            } else {
                $("#contentContainer").addClass("sugar");
                $("#topFrame .back-btn").hide();
                __backPageId = lPageId;
            }

            console.log("Current Page ID "+lPageId);
            if(lPageId=="M1L0T1P60" || lPageId=="M1L0T1P61"){
                fnJumpToPageByID("M1L0T1P59");
            }else{
                fnJumpToPageByID(lPageId)
            }


            /* if(currPageId=="M1L0T1P16_1" || currPageId=="M1L0T1P16_2" || currPageId=="M1L0T1P16_3" || currPageId=="M1L0T1P16_10"){

            			fnJumpToPageByID("M1L0T1P16");

            		}

            		else {

            			fnJumpToPageByID(lPageId)

            		}

            */



            //chella updated code

            

               // fnJumpToPageByID(lPageId)




            sliderEnable()

            fnEnableForword(true);

            fnEnableReverse(true);



            // /*********************Hack to override next click functionality***************************/

            // 	setTimeout(function() {

            // 		if(fCheckCompletion(gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics[lCurrTopNum].Pages[lCurrPgNum], "Page")) {

            // 			fnGlowNextBtn();

            // 			fnDesiableNext(false)

            // 		}

            // 	}, 500)

            break;

    }

}



function fnInitialize() {

    var courseTitle = oXML.find("COURSETITLE").text();

    $("#CourseTitleFrame").html('<span id="spnCourseTitleTxt"  UNSELECTABLE="on">' + courseTitle + '</span>');

    //isAudioStreamPlaying = true;







    // removed to work for drag and drop

    /*$("#contentContainer").touchwipe({

		wipeLeft: function() {

			if(isNextBtnEnable && gCurrPageNum<gTotalPages && (!isInActivity)){

				fnGetPage("NEXT");

			}

		},

		wipeRight: function() {

			if(gCurrPageNum>1 && (!isInActivity)){

			fnGetPage("PREV");

			}

 		}

	});*/

}

function fnRemoveDuplicateValue() {
    var uniqueNames = [];
    $.each(gCompPageArr, function(i, el) {
        if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
    });

    gCompPageArr = uniqueNames.concat();
}

function fnLoadPage(lModNum, lLessNum, lTopNum, lPageNum) {

    closeHelpBtnFunc();
	$("#id_transcriptBox #transcripttext").show();
    fnRemoveDuplicateValue();
    //


    //console.log("fnLoadPage")

    //isslideReached = false;



    //$("#contentContainer").css("opacity","0");
    isToolEnable = false;
    fnTools();

    $(".homeCover").css({ "display": "none" });

    $('#clsPlayPauseBtn').css('display', 'block');

    $('.HighlightHelp').css({ 'display': 'none', 'opacity': '0' });

    $("#slider").slider("value", "0");

    fnShowBtn();

    home_enable();





    fnDisableGlobalSlider();

    TweenMax.killAll();

    gAudioId = "";



    /**to avoid selectable**/

    /* $('html').on("dragstart, selectstart", function (a) {

         this.find("*").andSelf().attr("unselectable", "on");

     });*/



    try {

        fnSetCurrSndObj(null);



    } catch (e) {}



    //playPauseAudio();

    fnPauseVideo();

    videoObjectId = null;

    $('#contentFrame').html("");





    sliderEnable()

    fnEnableForword(true);

    fnEnableReverse(true);

    //Refresh Assessment

    /*if(gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("ASSESSMENTREFRESH") == "Y"){

    	fnReInitAssessment()

    }*/

    //

    gIsAssessment = (gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].attr("ISSKILLCHECK") == "Y") ? true : false;

    gIsPageSkillCheck = (gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("ISSKILLCHECK") == "Y") ? true : false;

    isNextDisable = (oXML.find("DISABLEDNEXT").text().toLowerCase() == "false") ? true : false;

    //To unbind previous page audio events

    isIntroPage = false;

    //Added to show preloader for first page

    fnShowPreLoader();

    fnResetAudioProgressBar();

    //---------------------------

    $('#contentFrame').html(""); //Added to remove last embedded Flash video from the page
    currentPageType = gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("PAGETYPE");



    //fnDesiableBack(true);

    //fnDesiableNext(true);

    //Setting Location for SCORM

    //BVScorm_setlocation(gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("ID"))

    //gIsPageSkillCheck ? BVScorm_setlocation(gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[0].attr("ID")) : BVScorm_setlocation(gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("ID"));

    if (currentPageType == "assessment") {

        $('.clsReplayIcon, .ClsToolbtnIcon, #clsMnuBtn').css({
            "opacity": ".5"
        });
        setTimeout(function() {
            $('.clsReplayIcon, .ClsToolbtnIcon, #clsMnuBtn').css({
                "opacity": ".5"
            });

        }, 300)

    } else {

        $('.clsReplayIcon, .ClsToolbtnIcon, #clsMnuBtn').css({
            "opacity": "1"
        });

        setTimeout(function() {
            if (assessmentObj.getUserReviewType()) {
                $('#clsMnuBtn').css({
                    "opacity": ".5"
                });
            }
        }, 300)

    }


    if (gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("BOOKMARK") != "N") {

        if (IsScrom) {

            // console.log(currentPageType, "currentPageType" ,   window.isReviewMode , "isReviewMode")
            if (currentPageType != "assessment" && window.isReviewMode == false) {
                //  console.log(gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("ID"), "<<<<<<<<<<<<<lession location")
                BVScorm_setlocation(gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("ID"));

                fnSetCoreData();
            } else {
                // console.log(gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("ID"), "<<<<<<<<<<<<<lession location />>else ")
            }



        }

    }



    gCurrPage = lPageNum;

    gCurrTop = lTopNum;

    gCurrLess = lLessNum;

    gCurrMod = lModNum;

    /* if (gIsAssessment) {

        gAssessmentTotalQuestions = fnGetTotalQuestions();

    } */



    //if (!gIsPageSkillCheck) {

    if (!isNextDisable) {

        if ((gCurrPage + 1) == 1) {

            fnDesiableBack(true);

            fnDesiableNext(true);



        } else if ((gCurrPage + 1) == gTopLen) {

            fnDesiableNext(true);

            fnDesiableBack(false);

            //gIsAssessment ? fnDesiableBack(true) : fnDesiableBack(false);

        } else {



            fnDesiableBack(false);

            fnDesiableNext(true);

        }

    } else {

        fnDesiableBack(false);

        fnDesiableNext(false);



        $("#clsNxtBtn").removeClass("clsGlowNxtBtn").addClass("clsEnaNxtBtn");

        //fnHideShowAudioPlayer(true);

        if ((gCurrPage + 1) == gTopLen) {

            fnDesiableNext(true);

            fnDesiableBack(false);

            // $('.no-touch .closeContainer').unbind('hover');

            // $("#clsExitBtn").css({'background-position':'0px 0'});

            // $("#clsBGText").css({'opacity': '1'});

            // $("#clsBG").css({'background': 'url("media/images/player/common/close_hover.png") no-repeat'});

        }


        if ((gCurrPage + 1) == gTopLen) {

            $(".clsNxtBtnIcon").addClass("lastPageNextBtn");

            $("#clsNxtBtn").addClass("clsDisNxtBtn");

            $("#clsNxtBtn").addClass("pointer_events");



        } else {
            $(".clsNxtBtnIcon").removeClass("lastPageNextBtn");
            $("#clsNxtBtn").removeClass("pointer_events");
        }

    }





    var isBackDis = gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("BACKDISABLE");

    var isHomeDis = gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("HOMEDIS");

    var isNxtDis;

    if (isBackDis == "T") {

        fnDesiableBack(true);

    }

    var DISABLEDNEXT = oXML.find("DISABLEDNEXT").text().toLowerCase();



    if (DISABLEDNEXT == "true" && isHomeDis == "Y") {

        $("#clsHomeBtn").addClass("disableHomeBtn").removeClass("clsHomeBtn")



        $("#clsHomeBtn").off("click");

        isNxtDis = "T"



    } else {



        $("#clsHomeBtn").removeClass("disableHomeBtn").addClass("clsHomeBtn")

        isNxtDis = gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("NEXTDISABLE");

    }



    //fnLoadHomePage();



    //var isResource = gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("ISREFERENCES");

    var isResource = oXML.find("ISREFERENCES").text().toLowerCase();



    var isResourceForPage = gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("isResourceForPage");

    // var isCourseLogoAvailable = gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("SHOWLOGO");

    if (isResource == "" || isResource == "false" || isResource == undefined || isResourceForPage == "N") {

        $("#clsRefBtn").addClass("clsRefDis");

        lPageRefPath = "";

    } else {

        $("#clsRefBtn").removeClass("clsRefDis");

        lPageRefPath = 'pages/references/' + isResource;

    }



    var isCurrPgComp = fnCheckPageComplection(gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("ID"))
    console.log("Compare "+isCurrPgComp);
    if (isCurrPgComp) {

        fnDesiableNext(false);

    }



    gPageCompCondVal = 0;

    fnShowHidePlayerControls(true);

    pageTracking = new Object();

    pageTracking.id = gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("ID");

    if (!gIsAssessment) {

        gPageCompCondArr = new Array(parseInt(gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("MAXCONDITION")));

        if (!chckPageVisited(pageTracking.id)) {

            pageTracking.trackingArr = gPageCompCondArr;

            gPageTrackingArr.push(pageTracking);

        }

    }

    var isVideoPage = gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("ISVIDEO");



    if (isVideoPage == "Y" || gIsPageSkillCheck) {

        //fnHideShowAudioPlayer( true );

    } else {

        //fnHideShowAudioPlayer( false );

    }

    //fnDisableNavigation(gIsPageSkillCheck);

    //Hiding nav button for special pages

    if (gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("NAVVISIBLE") == "F") {

        $("#clsBackBtn").css("display", "none");

        $("#clsNxtBtn").css("display", "none");

    } else {

        $("#clsBackBtn").css("display", "block")

        $("#clsNxtBtn").css("display", "block")

    }



    if (gIsPageSkillCheck) {

        //fnRemoveShellEvents()

    } else {

        //fnAddShellEvents()

    }



    var currPgTitle = gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].find("PAGETITLE").text();
	
	var parentTitle = gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("PARENTTITLE");
    if( typeof parentTitle != 'undefined' ){
        currPgTitle = (parentTitle ? parentTitle : currPgTitle);
    }

    var lessonTitle = gModuleArr[lModNum].Lessons[lLessNum].find("LESSONTITLE").text();

    var topicTitle = gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].find("TOPICTITLE").text();

    var topicTitle = gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].find("TOPICTITLE").text();

    var currPgSrc = gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("PAGESRC");

    currentPageType = gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("PAGETYPE");
    transcriptDisable = gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("TRANSCRIPTDISABLE");

    var courseTitle = oXML.find("COURSETITLE").text();





    //$("#pgTitleFrame").html('<span id="spnPgTitleTxt">'+lessonTitle+'<font color="#ffffff"> | </font>'+currPgTitle+'</span>');

    //$("#pgTitleFrame").html('<span id="spnPgTitleTxt">'+lessonTitle+'</span>');

    //$("#pgTitleFrame").html('<span id="spnPgTitleTxt">'+currPgTitle+'</span>');



    //var topicImgPath = gModuleArr[lModNum].Lessons[lLessNum].attr("TOPICIMAGE");

    // $("#TopicImg").css('background', 'url(' + topicImgPath + ')')

    gTopLen = gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages.length;

    if (gModuleArr[gCurrMod].Lessons[gCurrLess].Topics[gCurrTop].Pages[gCurrPage].attr("TITLEVISIBLE") != "F") {

        //$("#pgTitleFrame").html('<span id="spnPgTitleTxt">'+topicTitle+' <font color="#8b8b8b">|</font> </span><span id="spnPgTopicTxt">'+currPgTitle+'</span>');

        // $("#pgTitleFrame").html('<span id="spnPgTopicTxt"  UNSELECTABLE="on">' + currPgTitle + '</span>');

        //$("#TopicTitleFrame").html(topicTitle);

        // $("#TopicTitleFrame").html('<span id="spnTopicTitleTxt"  UNSELECTABLE="on">' + topicTitle + '</span>');

        $("#CourseTitleFrame").html('<span id="spnCourseTitleTxt"  UNSELECTABLE="on">' + courseTitle + '</span>');

        // $("#TopicTitleFrame").html('<span id="spnTopicPartition"  UNSELECTABLE="on">|</span><span id="spnPgTopicTxt"  UNSELECTABLE="on">'+topicTitle+'</span>');

        //$("#pgTitleFrame").html('<span id="spnTopicTitleTxt"  UNSELECTABLE="on">'+topicTitle+'</span><span id="spnTopicPartition"  UNSELECTABLE="on">|</span><span id="spnPgTopicTxt"  UNSELECTABLE="on">'+currPgTitle+'</span>');

        $("#pgTitleFrame").html('<span id="spnTopicTitleTxt"  UNSELECTABLE="on">' + currPgTitle + '</span>');

    } else {

        $("#pgTitleFrame").html("")

    }



    //$('#clsPageNumber').html(fGetPageOfPages());

    $("#clsPageNumber").css("display", "block")

    $('#clsPageNoDisplay').html(fGetPageOfPages());

    // $('#clsTotalPages').html("/" + gTotalPages);

    bAudioDisable = gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("AUDIODISABLE");

    setPlayPauseButtonState(bAudioDisable);



    if (isiPAD) {

        setAudioButtonState("true");

        $("#clsAudioOnBtn,#clsAudioOffBtn").addClass("clsAudiobtndiable");

        $("#clsAudioOnBtn").show();

        $("#clsAudioOnBtn").css('opacity', '1');

        $("#clsAudioOnBtn").css({ 'visibility': 'visible', 'pointer-events': 'none' });

        $("#clsAudioOnBtn").off('click');

    } else

        setAudioButtonState(bAudioDisable);

    setTranscriptButtonState(bAudioDisable);

    setReplayButtonState(bAudioDisable);

    if (gIsPageSkillCheck) {

        fnDisablePlayerButton(true);

        fnDesiableNext(true);

        sliderDisable()

        fnEnableForword(false);

        fnEnableReverse(false);

    } else {

        fnDisablePlayerButton(false);

    }

    //reset page variables.

    manifest = [];

    audioPath = "";

    gAudioId = "";

    $(".loadingText").show();

    $(".loadingText").html("Loading 0%")



    if (!(gCurrPageNum < gTotalPages)) {

        $('#clsNxtBtn').css('pointer-events', 'auto');

    } else {

        $('#clsNxtBtn').css('pointer-events', 'auto');

    }

    if (gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("ID") == "M0L1T1P2") {

        $('#contentFrame').css('overflow-y', 'hidden');

    } else {

        $('#contentFrame').css('overflow-y', 'hidden');

    }



    $('#contentFrame').load(currPgSrc, function() {



        perCachePageImagesAudio();



        // Below line is added for 508 accessibility.

        setTimeout(function() {

            update508ForPlayerCtrl('#clsExitBtn');

        }, 200);



        //function for page completion on page load , set "isPageCompletionOnPageLoad" true in mastercontent.xml

        if (isPageCompletionOnPageLoad == "true") {
            console.log("page completed");

            //console.log("isPageCompletionOnPageLoad="+isPageCompletionOnPageLoad)



            fnForcePageComplete();

            //fnUpdatePageCompletionCounter(0);

        }



    });



    /*$.get(currPgSrc, {}, function(data, status, xhr) {

    	var a = window.location.href;

    	var b = a.split("?")[0];

    	var c = b.substr(0, b.lastIndexOf("/"))

    	var updatedData = data.replace(/pages\/(images|css|js|assets)+/g, c+"/pages/$1");

    	$("#contentFrame").html(updatedData);

    	perCachePageImagesAudio();

    });*/



    //fnEnableForword(true);

    //fnEnableReverse(true);

    if (isiPAD) {

        //disable Audio on/off button on IPAD

        $("#clsAudioOnBtn,#clsAudioOffBtn").addClass("clsAudiobtndiable");

        /* $("#clsAudioOnBtn").show();

         $("#clsAudioOnBtn").css('opacity','1');*/

    }



    $(".helpHighlight").css("opacity", "0");

    $(".helpHighlight").css("visibility", "hidden");

    $(".helpHighlight").css("top", "14.5%");



    //Shweta K: Added below code for disabling slider in required pages

    if (((gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("DISABLESLIDER")) != "undefined") && ((gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("DISABLESLIDER")) != undefined) && ((gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("DISABLESLIDER")) != "")) {

        isSliderDisable = gModuleArr[lModNum].Lessons[lLessNum].Topics[lTopNum].Pages[lPageNum].attr("DISABLESLIDER");

        if (isSliderDisable == "Y") {

            isSliderDisable = true;

        } else {

            isSliderDisable = false;

        }

    } else {

        isSliderDisable = false;

    }



    screen_lock();

    if (isNxtDis == "T") {

        fnDesiableNext(true);

    }

    if (currentPageType == "unlockedPage") {

        setTimeout(function() {
            enableNextBtn();
            fnDesiableNext(false);
            var _getCurrentPageID = getCurPageIDVal();
            updateCurrenPageIdVal(_getCurrentPageID);
        }, 600)

    }




    //$("#clsGlosBtn").removeClass().addClass("clsGlosDisabled");

}



// This function will update code for enabled buttons for 508 accessibility.

function update508ForPlayerCtrl(p_strFocus) {

    var arrTabIndexUpdate = ['#clsExitBtn', '#clsMnuBtn', '#clsHelpBtn', '#clsGlosBtn', '#clsPlayPauseBtn', '#transcriptBtn'];

    if ($('#clsReplay').css('display') == "block") {

        var nIndex = arrTabIndexUpdate.indexOf('#clsPlayPauseBtn');

        arrTabIndexUpdate[nIndex] = '#clsReplay';

    }

    if ($('#clsBackBtn').hasClass('clsEnaBackBtn'))

        arrTabIndexUpdate.push('#clsBackBtn');

    if ($('#clsNxtBtn').hasClass('clsGlowNxtBtn') || $('#clsNxtBtn').hasClass('clsEnaNxtBtn'))

        arrTabIndexUpdate.push('#clsNxtBtn');

    updateTabIndex(arrTabIndexUpdate, p_strFocus);

}



function fnDesiableNext(lcase) {

    if (lcase) {
        //disabled the next

        $("#clsNxtBtn").removeClass("clsGlowNxtBtn");
        $("#NextGlow").css("display", "none");
        $("#clsNxtBtn").removeClass("clsEnaNxtBtn");
        $("#clsNxtBtn").removeClass("clsBlinkNxtBtn");
        $("#clsNxtBtn").addClass("clsDisNxtBtn");
        $("#clsNxtBtn").unbind("click");
        isNextBtnEnable = false;
    } else {

        //Enabled the next



        $("#clsNxtBtn").removeClass("clsDisNxtBtn");

        $("#clsNxtBtn").addClass("clsEnaNxtBtn");

        isNextBtnEnable = true;

        $("#clsNxtBtn").unbind("click");

        $("#clsNxtBtn").click(function(e) {

            // $("#ToolPop").hide();
            // $(".ClsToolbtn").hide();



            nextBtnClik = true;

            backBtnClik = false;
            volumeProgressState();
            fnGetPage("NEXT");

        });

    }

    if (!$("#clsNxtBtn").hasClass("clsGlowNxtBtn")) {

        $(".nextInst").hide();

        /* $('.clsNxtPatch').css('display','none'); */

        //$("#clsNxtBtn").addClass("clsEnaNxtBtn");

    }

    if ($("#clsNxtBtn").hasClass("clsGlowNxtBtn")) {



        $("#clsNxtBtn").removeClass("clsEnaNxtBtn");

        //$("#clsNxtBtn").addClass("clsDisNxtBtn");

    }

}
// Added by Developer for Showing and hidinf the Volume slider
//18-11-2022
function volumeProgressState(showhideSlider){
    if(true)
        $('#id_slider-vertical').addClass('d-none');
        
    if( $("#slidervertical").slider("value")<5){  
        isAudioEnable=false;      
        $("#clsAudioOnBtn").css("display", "none");
        $("#clsAudioOffBtn").css("display", "inline");      
        audioObjRef.muted = true;
    }
    else{
        isAudioEnable=true;      
        audioObjRef.muted = false;          
        $("#clsAudioOffBtn").css("display", "none");
    $("#clsAudioOnBtn").css("display", "inline");
    }
}

function handelEvent(e) {

    fnGetPage(e.data);

}



function fnDesiableBack(lcase) {
    volumeProgressState();
    if (lcase) {

        $("#clsBackBtn").removeClass("clsEnaBackBtn");

        $("#clsBackBtn").addClass("clsDisBackBtn");

        $("#clsBackBtn").unbind("click");

        isBackBtnEnable = false;

    } else {

        $("#clsBackBtn").removeClass("clsDisBackBtn");

        $("#clsBackBtn").addClass("clsEnaBackBtn");

        isBackBtnEnable = true;

        $("#clsBackBtn").unbind("click");

        $("#clsBackBtn").click(function(e) {

            if ($("#clsBackBtn").hasClass("clsDisBackBtn")) {

                return;

            }

            if (isInActivity) {

                fnReturnToHome();

            } else {

                fnGetPage("PREV");

            }

            backBtnClik = true;

            nextBtnClik = false;

        });

    }

}



function getNextPageId() {

    var lPageId = '';

    var lCurrPgNum, lCurrTopNum, lCurrLessNum, lCurrModNum;

    lCurrPgNum = gCurrPage;

    lCurrTopNum = gCurrTop;

    lCurrLessNum = gCurrLess;

    lCurrModNum = gCurrMod;



    if (gStartAssessmet) {

        if (gCurrQuestionCnt >= gShowQuestionCnt) {

            for (var i = 1; i < gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics[lCurrTopNum].Pages.length; i++) {

                if (gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics[lCurrTopNum].Pages[i].attr("ISSKILLCHECK") != "Y") { // Find Result page ID

                    lPageId = gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics[lCurrTopNum].Pages[i].attr("ID");

                    break;

                }

            }

        } else {

            lPageId = gRandAssessmentQustArr[gCurrQuestionCnt];

        }

    } else if (lCurrPgNum < gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics[lCurrTopNum].Pages.length - 1) {

        lPageId = gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics[lCurrTopNum].Pages[lCurrPgNum + 1].attr("ID");

    } else {

        if (lCurrTopNum < gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics.length - 1) {

            lPageId = gModuleArr[lCurrModNum].Lessons[lCurrLessNum].Topics[lCurrTopNum + 1].Pages[0].attr("ID");

        } else if (lCurrLessNum < gModuleArr[lCurrModNum].Lessons.length - 1) {

            lPageId = gModuleArr[lCurrModNum].Lessons[lCurrLessNum + 1].Topics[0].Pages[0].attr("ID");

        } else if (lCurrModNum < gModuleArr.length - 1) {

            lPageId = gModuleArr[lCurrModNum + 1].Lessons[0].Topics[0].Pages[0].attr("ID");

        }

    }



    return lPageId;

}



function fnHidePreloader() {

    loadBgAssetsById(getNextPageId());



    $(".clsPreloader").hide();

    isPreloadPlayed = false;

}

// This function is get called from Into.html which is genrated by HTML5 swiffy1.1.1 plugin in Adobe CS5 >> Commmand

function fnHideIntro() {

    $(".gridContainer").css({ "display": "block" });

    fnSetCurrSndObj(null);

    /*$("body").css("background-color","rgb(238,238,238)");*/

    $(".courseIntro").css({ "display": "none" });

    $(".courseIntro").html("");

    $(".courseIntro").hide();

    //$(".courseIntro").remove();

    //$(".courseIntro").empty();

    $('.gridContainer').css("visibility", "visible");

    //fnLoadPage(0, 0, 0, 0);	 // To Load the first page

}



function fnShowPreLoader() {

    isPreloadPlayed = true;

    $(".clsPreloader").show();

}



function fnSetPageComp() {

    if (!fnCheckPageCompletion()) {

        return;

    }

    var lPageId = gModuleArr[gCurrMod].Lessons[gCurrLess].Topics[gCurrTop].Pages[gCurrPage].attr("ID")

    fCheckAndAddToList(lPageId, "Page");

    if (fCheckCompletion(gModuleArr[gCurrMod].Lessons[gCurrLess].Topics[gCurrTop], "Topic")) {

        var lTopicId = gModuleArr[gCurrMod].Lessons[gCurrLess].Topics[gCurrTop].attr("ID");

        fCheckAndAddToList(lTopicId, "Topic");

        if (fCheckCompletion(gModuleArr[gCurrMod].Lessons[gCurrLess], "Lesson")) {

            var lLessonId = gModuleArr[gCurrMod].Lessons[gCurrLess].attr("ID");

            fCheckAndAddToList(lLessonId, "Lesson");

            if (fCheckCompletion(gModuleArr[gCurrMod], "Module")) {

                var lModuleId = gModuleArr[gCurrMod].attr("ID");

                fCheckAndAddToList(lModuleId, "Module");

                if (fCheckCompletion(null, "Course")) {

                    fSetComplete();

                }

            }

        }

    }

    if (IsScrom) {

        fnSetCoreData();

        fnSetCompletion();

    }

    //fnProgressBar();

    if (gCurrPageNum < gTotalPages && !gIsPageSkillCheck) {

        //fnGlowNextBtn();

    }

    if (!isNextBtnEnable && gCurrPageNum < gTotalPages && !gIsPageSkillCheck) {

        fnDesiableNext(false);

    }



}

/* var console = {};
console.log = function() {}; */

//Set Core Data ...

function fnSetCoreData() {

    //gCompModArr, gCompLessArr, gCompTopArr

    var lessData = "",

        topicData = "",

        modData = "";

    if (gCompLessArr != "" && gCompLessArr != undefined) {

        lessData = gCompLessArr.join(",")

    }

    if (gCompModArr != "" && gCompModArr != undefined) {

        modData = gCompModArr.join(",")

    }

    if (gCompTopArr != "" && gCompTopArr != undefined) {

        topicData = gCompTopArr.join(",")

    }



    //Adding pages topic lessons module that are not completed.....

    lPagesArrDummy = fGetNonCompletedTopicPages();

    lTopicsArrDummy = fGetNonCompletedLessonTopics();

    lLessonsArrDummy = fGetNonCompletedModuleLessons();

    //+fCreateObjToArr(gPageTrackingArr)

    var _trackedData = new Array()

    for (var i = 0; i < gPageTrackingArr.length; i++) {

        _trackedData[i] = gPageTrackingArr[i].id + "$" + gPageTrackingArr[i].trackingArr;

    }



    //Code for suspend data

    /*var assessmentStr = ""

    for(var i=0; i<assessmentArray.length; i++){

    	assessmentStr += assessmentArray[i].aCurrentQuestion+",";

    	if(i==assessmentArray.length-1){

    		assessmentStr += assessmentArray[i].isCorrect

    	}else{

    		assessmentStr += assessmentArray[i].isCorrect+"$"

    	}

    }*/

    //



    var dataSend = lPagesArrDummy.join(",") + "#" + lTopicsArrDummy.join(",") + "#" + lLessonsArrDummy.join(",") + "#" + modData + "#" + _trackedData.join("|") + "#" + gAssessmentAttempt + "#" + assessmentNextBtn.join(",") + "#" + assessment_score.join(",") + "#" + correctQueCounter + "#" + assesmentScore + "#" + isFresher + "#" + preTetIDArray.join(",") + "#" + postTetIDArray.join(",") + "#" + gIsAssessmentCompleted;




    //rishi
    if (currentPageType == "assessment" || window.isReviewMode == true) {
        return;
    }

    console.log(dataSend);

    BVScorm_setcoredata(dataSend);
}



//function for non complete topic pages

function fGetNonCompletedTopicPages() {

    var lPagesArrDummy = new Array();

    var lPagesArrForCompletedTopics = new Array();



    for (var i = 0; i < gCompTopArr.length; i++) {

        var lTopicObj = fGetObjFromID(gCompTopArr[i], "Topic");

        for (var k = 0; k < lTopicObj.Pages.length; k++) {

            lPagesArrForCompletedTopics[lPagesArrForCompletedTopics.length] = lTopicObj.Pages[k].attr("ID");

        }

    }



    for (var i = 0; i < gCompPageArr.length; i++) {

        var bFound = false;

        for (var j = 0; j < lPagesArrForCompletedTopics.length; j++) {

            if (lPagesArrForCompletedTopics[j] == gCompPageArr[i]) {

                bFound = true;

                break;

            }

        }

        if (!bFound) {

            lPagesArrDummy[lPagesArrDummy.length] = gCompPageArr[i]

        }

    }

    return lPagesArrDummy;

}



//Function for non completed topic in lessons...

function fGetNonCompletedLessonTopics() {

    var lTopicsArrDummy = new Array();

    var lTopicsArrForCompletedLessons = new Array();



    for (var i = 0; i < gCompLessArr.length; i++) {

        var lLessonObj = fGetObjFromID(gCompLessArr[i], "Lesson");

        for (var k = 0; k < lLessonObj.Topics.length; k++) {

            lTopicsArrForCompletedLessons[lTopicsArrForCompletedLessons.length] = lLessonObj.Topics[k].attr("ID");

        }

    }



    for (var i = 0; i < gCompTopArr.length; i++) {

        var bFound = false;

        for (var j = 0; j < lTopicsArrForCompletedLessons.length; j++) {

            if (lTopicsArrForCompletedLessons[j] == gCompTopArr[i]) {

                bFound = true;

                break;

            }

        }

        if (!bFound) {

            lTopicsArrDummy[lTopicsArrDummy.length] = gCompTopArr[i]

        }

    }

    return lTopicsArrDummy;

}



//function for non completed lessons in modules...

function fGetNonCompletedModuleLessons() {

    var lLessonsArrDummy = new Array();

    var lLessonsArrForCompletedModules = new Array();



    for (var i = 0; i < gCompModArr.length; i++) {

        var lModuleObj = fGetObjFromID(gCompModArr[i], "Module");

        for (var k = 0; k < lModuleObj.Lessons.length; k++) {

            lLessonsArrForCompletedModules[lLessonsArrForCompletedModules.length] = lModuleObj.Lessons[k].attr("ID");

        }

    }



    for (var i = 0; i < gCompLessArr.length; i++) {

        var bFound = false;

        for (var j = 0; j < lLessonsArrForCompletedModules.length; j++) {

            if (lLessonsArrForCompletedModules[j] == gCompLessArr[i]) {

                bFound = true;

                break;

            }

        }

        if (!bFound) {

            lLessonsArrDummy[lLessonsArrDummy.length] = gCompLessArr[i]

        }

    }

    return lLessonsArrDummy;

}



//Completion of module....

function fSetComplete() {

    //BVScorm_complete();

}



function fnCheckPageComplection(pageID) {

    // if(pageID=="M1L0T1P16"){

    // 	console.log("same page"+pageID);

    // }else{

    // console.log("fnCheckPageCompection"+pageID);

    for (var i = 0; i < gCompPageArr.length; i++) {

        if (gCompPageArr[i] == pageID) {

            return true;

        }

    }

    // }

    return false;

}

/**/

function fnSetCompletion() {

    var moduleCounter, lessonCounter, topicCounter, pageCounter, totalPageCounter;

    moduleCounter = 0;

    totalPageCounter = 0;

    oXML.find("MODULE").each(function() {

        lessonCounter = 0;

        $(this).find("LESSON").each(function() {

            topicCounter = 0;

            $(this).find("TOPIC").each(function() {

                pageCounter = 0;

                $(this).find("PAGE").each(function() {

                    pageCounter++;

                    totalPageCounter++;

                });

                topicCounter++;

            });

            lessonCounter++;

        });

        moduleCounter++;

    });

}



function fnPauseAudio() {

    bAudioPlaying = true;
    //alert("videoObjectId", videoObjectId)
    if (videoObjectId == null || videoObjectId == undefined || videoObjectId == '') {

        playPauseAudio();

    } else {

        if (videoPlaying) {

            fnPauseVideo();

            $(".video_play").removeClass('pause');

        } else {

            videoPlaying = true;

            playPauseAudio();

        }

    }

}



function fnPlayAudio() {

    if (videoObjectId == null || videoObjectId == undefined || videoObjectId == '') {

        if (!isPaused) {

            bAudioPlaying = false;

            //masterTimeline.play();

            playPauseAudio();

            //fnPlayVideo();

            return;

        }

    }

    if (videoPlaying) {

        if (videoPausedBefore) {



        } else {

            fnPlayVideo();

            $(".video_play").addClass('pause');

        }

    } else {

        if (!isPaused) {

            bAudioPlaying = false;

            masterTimeline.play();

            playPauseAudio();

            //fnPlayVideo();

        }

    }

}



// For Video stop and play

var videoObjectId

var videoPausedBefore = false;

var audioControlFromPlayer = false;

//setVideoObject called from page level to set video object

function setVideoObject(videoId) {

    if (videoId == "") {

        return;

    }

    videoObjectId = videoId;

    videoPausedBefore = false;

    //video mute button control

    var tempStr = $("#clsAudioOffBtn").css("display")

    var videoObj = document.getElementById("" + videoObjectId);

    if (tempStr != "none") {
        videoObj.muted = true;
    }

    videoObj.addEventListener('volumechange', function(e) {
        if (audioControlFromPlayer) {
            audioControlFromPlayer = false;
            return;
        }

        if (videoObj.muted) {
            $("#clsAudioOnBtn").css("display", "none");
            $("#clsAudioOffBtn").css("display", "inline");
            isAudioEnable = false;
            bAudioMute = true
        } else {
            $("#clsAudioOffBtn").css("display", "none");
            $("#clsAudioOnBtn").css("display", "inline");
            isAudioEnable = true;
            bAudioMute = false
        }
    })



    //$('#'+videoObjectId).

    // below code resolves mac safari full screen exit player alignment issue by sachin

    $('#' + videoObjectId).bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(e) {
        var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
        var event = state ? 'FullscreenOn' : 'FullscreenOff';
        if (event == "FullscreenOff")
            resizeFrame();
    });
}



function fnPauseVideo() {
    videoObjectId = document.getElementById("myVideo");
    if (videoObjectId) {
        if (isiPAD) {
            //Added for iPAD. iPAD keep video control & unable to clik on menu || exit yes no Button
            $("video").removeAttr('controls');
        }

        if (videoObjectId.paused) {
            videoPausedBefore = true
        } else {
            videoPausedBefore = false
        }

        if (!videoObjectId.ended && !videoObjectId.paused) {
            videoObjectId.pause();
            $('#clsPlayPauseBtn').addClass("clsPlay");
            // Below line is added for 508 accessibility.
            $('#clsPlayPauseBtn').attr("title", "Play");
            $('#clsPlayPauseBtn').removeClass("clsPause");
            $('#clsPlayPauseBtn').find("span.tooltip").html("Play");
        }

    }

}



function fnPlayVideo() {
    videoObjectId = document.getElementById("myVideo");
    if (videoObjectId) {
        if (isiPAD) {
            //Added for iPAD. iPAD keep video control & unable to clcik on menu || exit yes no Button
            // $("video").attr("controls", true);
        }

        if (videoPausedBefore) {
            videoPausedBefore = false
        } else {
            if (!videoObjectId.ended && videoObjectId.paused && !videoPausedBefore) {
                videoObjectId.play();
                $('#clsPlayPauseBtn').removeClass("clsPlay");
                $('#clsPlayPauseBtn').addClass("clsPause");
                // Below line is added for 508 accessibility.
                $('#clsPlayPauseBtn').attr("title", "Pause");
                $('#clsPlayPauseBtn').find("span.tooltip").html("Pause");
            }

        }

    }

}



function fGetPageOfPages() {

    /* if (gModuleArr[gCurrMod].Lessons[gCurrLess].Topics[gCurrTop].Pages[gCurrPage].attr("ID") == "M0L35T1P3" || gModuleArr[gCurrMod].Lessons[gCurrLess].Topics[gCurrTop].Pages[gCurrPage].attr("ID") == "M0L35T1P2") {

         gCurrPageNum = 35;

     }*/



    //return fGet2DigitNo(gCurrPageNum) + " /" + fGet2DigitNo(gTotalPages);

    var tempNo = gModuleArr[gCurrMod].Lessons[gCurrLess].Topics[gCurrTop].Pages[gCurrPage].attr("PAGEDISPNO")

    return fGet2DigitNo((gCurrPage + 1)) + "/" + fGet2DigitNo(gTopLen);

    return fGet2DigitNo((gCurrPage + 1));

}



function fGet2DigitNo(lNo) {

    return (lNo < 10) ? ("0" + lNo) : ("" + lNo);

}



//checking for bookmark

function fnCheckForBookMark() {

    /*  IsScrom = true;
     suspend_data = "M1L0T1P0,M1L0T1P1,M1L0T1P8,M1L0T1P10,M1L0T1P12,M1L0T1P13,M1L0T1P3,M1L0T1P5,M1L0T1P4,M1L0T1P6,M1L0T1P7####M1L0T1P0$1|M1L0T1P1$1|M1L0T1P2$|M1L0T1P8$|M1L0T1P10$|M1L0T1P12$|M1L0T1P13$|M1L0T1P3$1|M1L0T1P4$|M1L0T1P5$|M1L0T1P6$|M1L0T1P7$#0##0,0,0,0,0#0#-1#false###false"; 
     lesson_location = "M1L0T1P7" */
    if (IsScrom) {

        if (suspend_data != "" && suspend_data != undefined) {

            var lArrTemp = suspend_data.split("#");

            /*  console.log("check bookmark total " + lArrTemp[0]);

             console.log("check bookmark " + lArrTemp[0]); */

            if (lArrTemp[0] != "" && lArrTemp[0] != undefined) {

                gCompPageArr = new Array();

                gCompPageArr = lArrTemp[0].split(",");

            }

            if (lArrTemp[1] != "" && lArrTemp[1] != undefined) {

                gCompTopArr = new Array();

                gCompTopArr = lArrTemp[1].split(",");

            }

            if (lArrTemp[2] != "" && lArrTemp[2] != undefined) {

                gCompLessArr = new Array();

                gCompLessArr = lArrTemp[2].split(",");

            }



            if (lArrTemp[3] != "" && lArrTemp[3] != undefined) {

                gCompModArr = new Array();

                gCompModArr = lArrTemp[3].split(",");

            }

            if (lArrTemp[4] != "" && lArrTemp[4] != undefined) {

                var _trackedData = lArrTemp[4].split("|")

                for (var i = 0; i < _trackedData.length; i++) {

                    var _temp = new Object();

                    _temp.id = _trackedData[i].split("$")[0];

                    _temp.trackingArr = _trackedData[i].split("$")[1].split(",");

                    gPageTrackingArr.push(_temp);

                }

            }

            if (lArrTemp[5] != "" && lArrTemp[5] != undefined) {

                gAssessmentAttempt = parseInt(lArrTemp[5]);

            }

            if (lArrTemp[6] != "" && lArrTemp[6] != undefined) {

                assessmentNextBtn = lArrTemp[6].split(",");

            }

            if (lArrTemp[7] != "" && lArrTemp[7] != undefined) {

                assessment_score = lArrTemp[7].split(",");

            }

            if (lArrTemp[8] != "" && lArrTemp[8] != undefined) {

                correctQueCounter = parseInt(lArrTemp[8]);

            }

            if (lArrTemp[9] != "" && lArrTemp[9] != undefined) {

                assesmentScore = parseInt(lArrTemp[9]);

            }

            if (lArrTemp[10] != "" && lArrTemp[10] != undefined) {

                if (lArrTemp[10] == "true") {

                    isFresher = true;

                } else {

                    isFresher = false;

                }

                // isFresher = parseInt(lArrTemp[10]);

            }

            if (lArrTemp[11] != "" && lArrTemp[11] != undefined) {

                preTetIDArray = new Array();

                preTetIDArray = lArrTemp[11].split(",");





            }

            if (lArrTemp[12] != "" && lArrTemp[12] != undefined) {

                postTetIDArray = new Array();

                postTetIDArray = lArrTemp[12].split(",");

            }

            if (lArrTemp[13] != "" && lArrTemp[13] != undefined) {

                if (lArrTemp[13] == "true") {

                    gIsAssessmentCompleted = true;

                } else {

                    gIsAssessmentCompleted = false;

                }

            }



            // Block to set all pages based on lesson, topic, module completion...

            for (var i = 0; i < gCompModArr.length; i++) {

                var lModuleObj = fGetObjFromID(gCompModArr[i], "Module");

                for (var k = 0; k < lModuleObj.Lessons.length; k++) {

                    fCheckandAppendToArr(gCompLessArr, lModuleObj.Lessons[k].attr("ID"));

                }

            }



            for (var i = 0; i < gCompLessArr.length; i++) {

                var lLessonObj = fGetObjFromID(gCompLessArr[i], "Lesson");

                for (var k = 0; k < lLessonObj.Topics.length; k++) {

                    fCheckandAppendToArr(gCompTopArr, lLessonObj.Topics[k].attr("ID"));

                }

            }



            for (var i = 0; i < gCompTopArr.length; i++) {

                var lTopicObj = fGetObjFromID(gCompTopArr[i], "Topic");

                for (var k = 0; k < lTopicObj.Pages.length; k++) {

                    fCheckandAppendToArr(gCompPageArr, lTopicObj.Pages[k].attr("ID"));

                }

            }



            var lval;

            assessmentScore = ((lval = BVScorm_getscore()) != -1) ? lval : 0;

            //gIsAssessmentCompleted = (gAssessmentAchievedScore >= gAssessmentPassScore);

            // Block ends



        } else {

            gCompPageArr = new Array();

            gCompModArr = new Array();

            gCompLessArr = new Array();

            gCompTopArr = new Array();

            /*preTetAssessmentArray = new Array();

            postTetAssessmentArray = new Array();*/

            gAssessmentAttempt = 0;

        }



        if (lesson_location != "" && lesson_location != undefined) {

            isBookMarkPopupShown = true;

            //Here come Bookmark msg

            if (window.confirm("Do you want to go to the last visited page?") != true) {

                lesson_location = "";

                //code for reset all mastercontent.xml as fresh launch.

                gCompPageArr = new Array();

                gCompModArr = new Array();

                gCompLessArr = new Array();

                gCompTopArr = new Array();

                gAssessmentAttempt = 0;

                BVScorm_setcoredata("");

            } else {

                lesson_location = lesson_location;

            }

        } else {

            //fnLoadPage(gCurrMod, gCurrLess, gCurrTop, gCurrPage);

        }

    } else {

        gCompPageArr = new Array();

        gCompModArr = new Array();

        gCompLessArr = new Array();

        gCompTopArr = new Array();

        /*preTetAssessmentArray = new Array();

            postTetAssessmentArray = new Array();*/

        gAssessmentAttempt = 0;

    }

}



function fnMute() {

    $("#clsUnMuteBtn").show();

    $("#clsMuteBtn").hide();

    $('#jquery_jplayer_1').jPlayer("mute");

}



function fnSoundUnMute() {

    $("#clsUnMuteBtn").hide();

    $("#clsMuteBtn").show();

    $('#jquery_jplayer_1').jPlayer("unmute");

}



//Complition functions...

function fCheckAndAddToList(lIdentifier, lCase) {

    if (lCase == "Page") {

        fCheckandAppendToArr(gCompPageArr, lIdentifier)

    } else if (lCase == "Topic") {

        fCheckandAppendToArr(gCompTopArr, lIdentifier)

    } else if (lCase == "Lesson") {

        fCheckandAppendToArr(gCompLessArr, lIdentifier)

    } else if (lCase == "Module") {

        fCheckandAppendToArr(gCompModArr, lIdentifier)

    }

}



function fCheckandAppendToArr(lArr, lIdentifier) {

    var exists = false

    for (var i = 0; i < lArr.length; i++) {

        if (lArr[i] == lIdentifier) {

            exists = true

            break;

        }

    }

    if (!exists) {

        lArr[lArr.length] = lIdentifier

    }

}



function fExistInArr(lArr, lIdentifier) {

    var exists = false

    for (var i = 0; i < lArr.length; i++) {

        if (lArr[i] == lIdentifier) {

            exists = true

            break;

        }

    }

    return exists;

}



function fCheckPageCompletion(lIdentifier) {

    var exists = false

    for (var i = 0; i < gCompPageArr.length; i++) {

        if (gCompPageArr[i] == lIdentifier) {

            exists = true

            break;

        }

    }

    return exists;

}



function fCheckPageVisited(id, lCase) {

    // console.log("fCheckPageVisited"+lCase+"::"+id);

    switch (lCase) {

        case "Page":

            for (var i = 0; i < gCompPageArr.length; i++) {

                if (gCompPageArr[i] == id) {

                    return true;

                }

            }

            return false;

    }

}



function fCheckCompletion(lObj, lCase) {

    switch (lCase) {

        case "Page":

            for (var i = 0; i < gCompPageArr.length; i++) {

                if (gCompPageArr[i] == lObj.attr("ID")) {

                    return true;

                }

            }

            return false;



        case "Topic":

            return (lObj.Pages.length <= (fGetCompleteElementCount(lObj.Pages, gCompPageArr)));



        case "Lesson":

            return (lObj.Topics.length <= (fGetCompleteElementCount(lObj.Topics, gCompTopArr)));

        case "Module":

            return (lObj.Lessons.length <= (fGetCompleteElementCount(lObj.Lessons, gCompLessArr)));

        case "Course":

            return (gModuleArr.length <= (fGetCompleteElementCount(gModuleArr, gCompModArr)));

    }

}



function fGetCompleteElementCount(lArr1, lArr2) {

    var lCount = 0

    for (var i = 0; i < lArr1.length; i++) {

        for (var j = 0; j < lArr2.length; j++) {

            if (lArr2[j] == lArr1[i].attr("ID")) {

                lCount++;

            }

        }

    }

    return lCount;

}



//function for getting objects from there IDS....

function fGetObjFromID(lId, lCase) {

    var lArrLessons;

    var lArrTopics;

    var lArrPages;

    switch (lCase) {

        case "Page":

            for (var i = 0; i < gModuleArr.length; i++) {

                lArrLessons = gModuleArr[i].Lessons;

                for (var j = 0; j < lArrLessons.length; j++) {

                    lArrTopics = lArrLessons[j].Topics;

                    for (var k = 0; k < lArrTopics.length; k++) {

                        lArrPages = lArrTopics[k].Pages;

                        for (var l = 0; l < lArrPages.length; l++) {

                            if (lArrPages[l].attr("ID") == lId) {

                                return lArrPages[l];

                            }

                        }

                    }

                }

            }

            return null;



        case "Topic":

            for (var i = 0; i < gModuleArr.length; i++) {

                lArrLessons = gModuleArr[i].Lessons;

                for (var j = 0; j < lArrLessons.length; j++) {

                    lArrTopics = lArrLessons[j].Topics;

                    for (var k = 0; k < lArrTopics.length; k++) {

                        if (lArrTopics[k].attr("ID") == lId) {

                            return lArrTopics[k];

                        }

                    }

                }

            }

            return null;



        case "Lesson":

            for (var i = 0; i < gModuleArr.length; i++) {

                lArrLessons = gModuleArr[i].Lessons;

                for (var j = 0; j < lArrLessons.length; j++) {

                    if (lArrLessons[j].attr("ID") == lId) {

                        return lArrLessons[j];

                    }

                }

            }

            return null;



        case "Module":

            for (var i = 0; i < gModuleArr.length; i++) {

                if (gModuleArr[i].attr("ID") == lId) {

                    return gModuleArr[i];

                }

            }

            return null;

    }

}



//For Page Pre Loading Audio images and all.....

function perCachePageImagesAudio() {

    $(".clsPreloader").css("background-color", "rgba(255,255,255,1)")

    if (manifest.length > 0 && manifest != undefined) {

        loader = null;

        loader = new createjs.LoadQueue(true);

        loader.on("complete", handlePageComplete);

        loader.on("fileload", handlePageFileLoad);

        loader.loadManifest(manifest, true);

    } else {

        if (_currAudioPlayingPath == null) {

            fnHidePreloader();

        } else {

            initAudioPlayer(_currAudioPlayingPath);

        }

    }

}



function handlePageFileLoad(event) {

    var item = event.item; // A reference to the item that was passed in to the LoadQueue

    //var type = item.type;

    var percent

    if (isNaN(event.id)) {

        percent = 0;

    } else {

        percent = Math.round((Number(event.id) + 1) * 100 / manifest.length)

    }

    if (isNaN(percent)) {

        percent = 0;

    }

    if (percent > 100) {

        percent = 99;

    }

    $(".loadingText").html("Loading Page " + percent + "%")

}



function handlePageComplete() {



    fnHidePreloader();



    setTimeout(function() {

        resizeFrame();

    }, 200);



    if (RemovePageAnimation == false || RemovePageAnimation == "false") {

        TweenMax.to($("#contentContainer"), 0, { "opacity": "1" });

        TweenMax.to($(".screen_lock"), 0, { "display": "none" });

        TweenMax.from($("#contentContainer"), 0, { "margin-top": "0%", onComplete: startPageAnimComplete })







    } else if (nextBtnClik) {

        TweenMax.to($("#contentContainer"), 0, { "margin-top": "100%" });

        TweenMax.to($("#contentContainer"), 0, { "opacity": "1" });

        TweenMax.to($("#contentContainer"), 2, { "margin-top": "0%", onComplete: startPageAnimComplete })





    } else if (backBtnClik) {

        TweenMax.to($("#contentContainer"), 0, { "margin-top": "-100%" });

        TweenMax.to($("#contentContainer"), 0, { "opacity": "1" });

        TweenMax.to($("#contentContainer"), 2, { "margin-top": "0%", onComplete: startPageAnimComplete })



    } else {

        TweenMax.to($("#contentContainer"), 0, { "opacity": "1" });

        TweenMax.from($("#contentContainer"), 2, { "margin-top": "100%", onComplete: startPageAnimComplete })





    }

}





function startPageAnimComplete() {





    if (audioPath == null || audioPath == "") {

        //fnUpdatePageCompletionCounter(0);

    } else {

        gAudioId = "startAudio";

        initializeJplayer(audioPath);

    }

}

function fnPlayItemAudio(gCurrentIndex) {

    audioindex = (gCurrentIndex);

    gAudioId = (gCurrentIndex);

    //hidePopupElement()

    fnResetCurrentCue();

    updateContentArray = eval("popupContentArray" + (gCurrentIndex));

    fnHideShowAudioPlayer(false);

    initializeJplayer(gItemAudioPath[gCurrentIndex]);

}



function fnTranscript() {

    $("#id_transcriptBox").toggle();

    //     if ($("#transcriptBtn").hasClass("clsTransBtnDisable")) {

    //         return;

    //     }

    if (isTransEnable) {

        $("#transcriptBtn").removeClass("clsTransOffBtn");

        $("#transcriptBtn").addClass("clsTransOnBtn");

        $("#transcriptBtn span").html("TRANSCRIPT ON");

        //         $("#transcript_divider").hide();

        //         fnhideTranscript();

        isTransEnable = false;

    } else {

        // 				$(".ClsToolPop").css({"transform":"translateY(100%)"});

        // 				$(".ClsToolbtn ").removeClass("ClsToolbtnSelected");

        $("#transcriptBtn").removeClass("clsTransOnBtn");

        $("#transcriptBtn").addClass("clsTransOffBtn");

        $("#transcriptBtn span").html("TRANSCRIPT OFF");

        //         $("#transcript_divider").show();

        //         fnshowTranscript();

        isTransEnable = true;

    }

}



function fnshowTranscript() {

    if ($("#id_transcriptBox").hide()) {

        $("#id_transcriptBox").show();

    } else {

        $("#id_transcriptBox").show();

    }

}



function fnhideTranscript() {

    $("#id_transcriptBox").hide();

}

function checkAudioMuteUnmute1(){
    var xxx = document.getElementById("audioplayer_help");
    console.log("Muted ",xxx.muted)
    if($("#clsAudioOffBtn").css("display")=="block"){
        xxx.muted = false;
    }else{
       xxx.muted = true;
    }
}

function fnSoundOnOff() {
    if($(".audioCnt").length==1){
        //console.log("inside")
        checkAudioMuteUnmute1();
    }else{
        //console.log("outside")
    }
    //console.log($("#clsAudioOffBtn").css("display"));
    
    if ($("#clsAudioOnBtn").css("opacity") < 1) {
        return;
    }

    if (!bAudioMute) {
        document.getElementById('id_transcriptBox').style.visibility = 'visible';
        /* $("#id_transcriptBox").show();
         $("#transcriptBtn").removeClass("clsTransOnBtn");
         $("#transcriptBtn").addClass("clsTransOffBtn");
         $("#transcriptBtn span").html("TRANSCRIPT OFF");*/
        //isTransEnable = true;
        console.log('in first')
        audioObjRef.muted = true;
        $("#clsAudioOnBtn").css("display", "none");
        $("#clsAudioOffBtn").css("display", "inline");
        $("#clsAudioOffBtn span.tooltip").html("Audio");
        isAudioEnable = false;
    } else {
        console.log('in second')
        audioObjRef.muted = false;
        $("#clsAudioOffBtn").css("display", "none");
        $("#clsAudioOnBtn").css("display", "inline");
        $("#clsAudioOffBtn span.tooltip").html("Audio");
        isAudioEnable = true;
    }


    try {

        var videoObj = document.getElementById("" + videoObjectId);

        if (videoObj) {

            if (!bAudioMute) {

                videoObj.muted = true;

            } else {

                videoObj.muted = false;

            }

        }

    } catch (e) {}



    bAudioMute = !(bAudioMute);

}



function fnSoundOn() {

    //$("#jquery_jplayer_1").jPlayer("volume", 1);

}



function fnSoundOff() {

    //$("#jquery_jplayer_1").jPlayer("volume", 0);

}

function playerToggleAciteClass() {
    $("#clsNxtBtn").toggleClass("activcls");
    $("#clsAudioOffBtn").toggleClass("activcls");
    $("#clsAudioOnBtn").toggleClass("activcls");
    $("#clsExitBtn").toggleClass("activcls");
    $("#clsHelpBtn").toggleClass("activcls");
    $("#clsMnuBtn").toggleClass("activcls");
    $("#clsGlosBtn").toggleClass("activcls");
    $("#ToolBtn").toggleClass("activcls");
    $("#clsRefBtn").toggleClass("activcls");
    $("#clsVideoRefBtn").toggleClass("activcls");
    $("#clsBackBtn").toggleClass("activcls");
    $("#popupClose").toggleClass("activcls");
    $("#clsReplay").toggleClass("activcls");
    $("#transcriptBtn").toggleClass("activcls");
    $("#clsRevBtn").toggleClass("activcls");
    $("#clsForwardBtn").toggleClass("activcls");
}



//Audio Sync functionality

function UpdateTheTime(time) {

}

//video Sync functionality

function UpdateTheVideoTime(time) {

    if (currCue >= updateContentArray.length) {

        return;

    }

    if (time > (Number(updateContentArray[currCue].time))) {

        if (updateContentArray[currCue].transcript != "" && updateContentArray[currCue].transcript != undefined) {

            showTranscript(updateContentArray[currCue].transcript);

        }

        currCue++;
    }
}

function fnTools() {
    if (isToolEnable) {
        fnhideTranscript();
        /* $(".ClsToolPop").css({"transform":"translateY(0%)"});
        $(".ClsToolbtn ").addClass("ClsToolbtnSelected"); */

        $(".ClsToolPop").css("top", "2px").css({ "transform": "translateY(100%)" });
        $(".ClsToolbtn ").addClass("ClsToolbtnSelected");
        // $("#resourceBoxShadow ").addClass("resourceBox");
        
        //$(".ClsToolPop,.ClsToolSubPop").css("display","none");
        isToolEnable = false;
    } else {
        $(".ClsToolPop").css("top", "0px").css({ "transform": "translateY(0%)" });
        $(".ClsToolbtn ").removeClass("ClsToolbtnSelected");
        // $("#resourceBoxShadow ").removeClass("resourceBox");
        //$(".ClsToolPop,.ClsToolSubPop").css("display","block");
        isToolEnable = true;
    }
    $("#TooclsBtn").off("click")
    $("#TooclsBtn").on('click', function() {
        $(".ClsToolPop").css("top", "2px").css({ "transform": "translateY(100%)" });
        $(".ClsToolbtn ").addClass("ClsToolbtnSelected");
        // $("#resourceBoxShadow ").addClass("resourceBox");
        //$(".ClsToolPop,.ClsToolSubPop").css("display","none")
        isToolEnable = false;
    });
}

function showTranscript(str) {

    $("#transcripttext").html(str);

}



function hideDiv(str, showStr, eff) {

    var tempArray = [];

    if (str.indexOf(",") > -1) {

        tempArray = str.split(",");

    } else {

        tempArray[0] = str

    }

    for (var i = 0; i < tempArray.length; i++) {

        if (eff == "noeffect") {

            if (tempArray[i] == ".helpHighlight") {

                $(tempArray[i]).css("display", "none");

            } else {

                $(tempArray[i]).css("visibility", "hidden");

            }

            if (showStr != "" && showStr != undefined) {

                showDiv(showStr, eff);

            }

        } else if (eff == "scale") {

            //$(tempArray[i]).hide( "scale",{percent: 100, direction: 'both' }, 2000 );

            //$(tempArray[i]).toggle( "scale" );

            $(tempArray[i]).animate({

                opacity: 0

            }, 200, function() {

                if (tempArray[i] == ".helpHighlight") {

                    $(tempArray[i]).css("display", "none");

                } else {

                    $(tempArray[i]).css("visibility", "hidden");

                }

                if (showStr != "" && showStr != undefined) {

                    showDiv(showStr, eff);

                }

            });

        } else {

            //TweenLite.from($(tempArray[i]), .5, {alpha:1});



            /* $(tempArray[i]).animate({opacity:0},200,function(){

            	if(tempArray[i]==".helpHighlight"){

            		$(tempArray[i]).css("display","none");

            	}else{

            		$(tempArray[i]).css("visibility","hidden");

            	}

            	if(showStr != "" && showStr != undefined){

            		showDiv(showStr,eff);

            	}

            }); */

            $(tempArray[i]).css("visibility", "hidden");

            $(tempArray[i]).css("opacity", '0');

        }

    }

}



function carryDiv(str) {



    var tempArray = [];

    if (str.indexOf(",") > -1) {

        tempArray = str.split(",");

    } else {

        tempArray[0] = str

    }

    for (var i = 0; i < tempArray.length; i++) {

        //fraud for help highligh

        //if(tempArray[i]==".helpHighlight"){



        //$(tempArray[i]).css("display","inline");

        //}else{

        //$(tempArray[i]).css("visibility","visible");

        //$(tempArray[i]).css("opacity",'1');



        $(tempArray[i]).css("visibility", "visible");

        $(tempArray[i]).css("opacity", '1');



        //$(tempArray[i]).css("opacity","0");

        //TweenLite.to($(tempArray[i]), 0.5, {opacity:1});

        //}

    }

}



function showDiv(str, effect) {

    var tempArray = [];

    if (str.indexOf(",") > -1) {

        tempArray = str.split(",");

    } else {

        tempArray[0] = str

    }

    for (var i = 0; i < tempArray.length; i++) {

        //fraud for help highligh

        if (tempArray[i] == ".helpHighlight") {

            $(tempArray[i]).css("display", "inline");

        } else {



            $(tempArray[i]).css("visibility", "visible");



            if (effect == "noeffect") {

                //TweenLite.from($(tempArray[i]), .3, {alpha:0});

                //$(tempArray[i]).css("opacity","1");

            } else if (effect == "scale") {

                TweenLite.to($(tempArray[i]), 0, { scaleX: 0, scaleY: 0 });

                TweenLite.to($(tempArray[i]), 0.5, { scaleX: 1, scaleY: 1 });

            } else if (effect == "slideLeft") {

                var t = (Number($(tempArray[i]).position().left) + 10) + "px";

                TweenLite.from($(tempArray[i]), 0.5, { left: t, opacity: 0 });

            } else if (effect == "slideRight") {

                var t = (Number($(tempArray[i]).position().left) - 10) + "px";

                TweenLite.from($(tempArray[i]), 0.5, { left: t, opacity: 0 });

            } else if (effect == "slideBottom") {

                var t = (Number($(tempArray[i]).position().top) - 10) + "px";

                TweenLite.from($(tempArray[i]), 0.5, { top: t, opacity: 0 });

            } else if (effect == "slideTop") {

                var t = (Number($(tempArray[i]).position().top) + 10) + "px";

                TweenLite.from($(tempArray[i]), 0.5, { top: t, opacity: 0 });

            } else {

                $(tempArray[i]).css("opacity", "0");

                TweenLite.to($(tempArray[i]), 0.5, { opacity: 1 });

            }

        }

    }

}



function fnAnimateElement(element, animtype, timer, hint, hinttype) {

    var animArray;

    var animTypeArray;

    var temp1 = {}

    if (animtype != "" && animtype != undefined) {

        animTypeArray = animtype.split(",")

        for (var i = 0; i < animTypeArray.length; i++) {

            animArray = animTypeArray[i].split(":")

            temp1[animArray[0]] = animArray[1];

        }

        if (timer != undefined || timer != "") {

            $(element).animate(temp1, 1000, "",

                function() {

                    fnElementCallBack(hint, hinttype);

                });

        } else {

            $(element).animate(temp1, 500, "",

                function() {

                    fnElementCallBack(hint, hinttype);

                });

        }

    }

}



function fnElementCallBack(hint, hinttype) {

    var animArray;

    var animTypeArray;

    var temp1 = {};

    if (hinttype != "" && hinttype != undefined) {

        animTypeArray = hinttype.split(",")

        for (var i = 0; i < animTypeArray.length; i++) {

            animArray = animTypeArray[i].split(":")

            temp1[animArray[0]] = animArray[1];

        }

        showDiv(hint);

        $(hint).css(temp1);

    }

}



function fnSetCurrSndObj(_mp3) {

    if (typeof(audioObjRef) != "string") {

        audioObjRef.pause();

        audioObjRef.setAttribute('src', null);

        audioObjRef.src = '';

        //resetSlider();

        onTimelineEnd();

        $("#audioplayer").attr("src", "")

        //audioObjRef.load();



    }

    _currAudioPlayingPath = null;

    bAudioCompleted = true;

    bAudioPlaying = false;

}



var isTouchDevice = (/ipad|iPhone|android/i.test(navigator.userAgent.toLowerCase()));



function checkIpadAudio() {

    if (iPadAudioPlayed) {

        return

    }

    //isTouchDevice =false;

    if (isTouchDevice && !isIntroPage) {

        ver = iOSversion();



        var $a = $('<a href="#" id="fakeClick"  style="position: absolute; top:40%;left:40%;z-index: 11000;"><img src="media/images/play_btn.png" /></a>');

        $(".loadingText").hide();

        $a.bind("click", function(e) {

            e.preventDefault();

            iPadAudioPlayed = true

            initializeJplayer(audioPath);

            $("#dummyBtn1").remove()

            audioObjRef.pause();

            fnShowPreLoader();

            $(".loadingText").show();

            perCacheImagesAudio();

            fullScreen4TouchDevice();

        });

        $("#dummyBtn1").append($a);

    } else {

        $("#dummyBtn1").remove()

        iPadAudioPlayed = true

        perCacheImagesAudio()

    }

}





function initializeJplayer(audioPath) {

    fnSetCurrSndObj(audioPath)

    if (!iPadAudioPlayed) {

        checkIpadAudio();

    }

    _currAudioPlayingPath = audioPath;

    initAudioPlayer(audioPath);

}



function fnEnableForword(status) {

    if (!status) {

        /* $("#clsForwardBtn").css({cursor:"default"});

        $("#clsForwardBtn").unbind("click");

        $("#clsForwardBtn").css({opacity:'0.5'}); */

        $("#clsForwardBtn").removeClass("classForwardBtn");

        $("#clsForwardBtn").addClass("clsForwardBtnDisable");

    } else {

        $("#clsForwardBtn").removeClass("clsForwardBtnDisable ");

        $("#clsForwardBtn").addClass("classForwardBtn");

        /* $("#clsForwardBtn").css({cursor:"pointer"});

        $("#clsForwardBtn").bind("click",function(e){

        	fnForwardSound();

        });

        $("#clsForwardBtn").css({opacity:'1'}); */

    }

}



function fnEnableReverse(status) {

    if (!status) {

        /* $("#clsRevBtn").css({cursor:"default"});

        $("#clsRevBtn").unbind("click");

        $("#clsRevBtn").css({opacity:'0.5'}); */

        $("#clsRevBtn").removeClass("classRevBtn");

        $("#clsRevBtn").addClass("clsRevBtnDisable");



    } else {

        $("#clsRevBtn").removeClass("clsRevBtnDisable");

        $("#clsRevBtn").addClass("classRevBtn");

        /* $("#clsRevBtn").css({cursor:"pointer"});

        $("#clsRevBtn").bind("click",function(e){

        	fnRevSound();

        });

        $("#clsRevBtn").css({opacity:'1'}); */

    }

}



function blinkGlwBtn() {

    //$('.clsGlowNxtBtn').toggleClass('clsBlinkNxtBtn');

}



function fnAudioFinishPageComp() {

    //alert(gCurrPageNum+" < "+gTotalPages)



    if (gCurrPageNum <= gTotalPages) {

        //fnGlowNextBtn();

        fnDesiableNext(false);



    }



    if (gCurrPageNum == gTotalPages) {

        fnDesiableNext(true);

    }



    fnDisablePlay();

    if (iOS) {

        isAudioStreamPlaying = false;

        $("#jplayerPlay").removeClass("jp-play");

        $("#jplayerPlay").addClass("jp-play-deactive");

        fnSetPageComp();

    }

    if (true) {

        $("#id_sliderContainer").css("opacity", "1");

        currentAudioObj = 0;

        masterTimeline.pause();

        // console.log("true");

    } else {

        audioObjRef.src = "";

        masterTimeline.play();

        // console.log(false);

        //$("#id_sliderContainer").css("opacity", "0.4");

        $("#ctrl_slider a").css("cursor", "default")

        isAudioPlaying = false;

        $("#playPauseID").removeClass().addClass("PLAYPAUSEDISABLEDCLSS");

        $("#slider").slider({

            disabled: true

        }).draggable("disable");

        $(".ui-slider ,.ui-slider-handle").css("cursor", "default");

        $("#playPauseID").off("click");

        $("#slider").slider("value", "100");

        TweenMax.killAll();

        setPlayPauseButtonState("TRUE");

    }

    //to show replay button and hide play /pause button

    $('#clsReplay').css('display', 'block');

    // $('#clsPlayPauseBtn').css('display', 'none');



    // Below line is added for 508 accessibility.

    update508ForPlayerCtrl('#clsExitBtn');



}



function fnGlowNextBtn() {

    /* $('#clsReplay').css('display', 'block');

     $('#clsPlayPauseBtn').css('display', 'none');*/

    //$(".nextInst").show();



    $("#clsNxtBtn").removeClass("clsEnaNxtBtn")

    $("#clsNxtBtn").addClass("clsGlowNxtBtn");

    $("#NextGlow").css("display", "block");

    $("#clsNxtBtn").removeClass("clsDisNxtBtn");

    //checkblinkGlwBtn = setInterval(blinkGlwBtn, 500);

    //TweenMax.to("#NextGlow", 0, {opacity:0});

    //setTimeout(function(){TweenMax.to("#NextGlow", 0.5, {opacity:1, repeatDelay:0.25, repeat:-1, yoyo:true});},200);



    // Below line is added for 508 accessibility.

    update508ForPlayerCtrl();

}



function iOSversion() {

    if (/iP(hone|od|ad)/.test(navigator.platform)) {

        // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>

        var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);

        return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];

    }

}



function highlightHelp() {

    $("#clsHelpBtn").addClass("highlight");

}



function removeHighlightHelp() {

    $("#clsHelpBtn").removeClass("highlight");

}



function fnResetCurrentCue() {

    currCue = 0;

}



function fnUpdatePageCompletionCounter(index) {

    if (index >= 0) {

        gPageCompCondArr[index] = 1;

        pageTracking.trackingArr = gPageCompCondArr;

    }

    fnSetPageComp();



    /*setPlayPauseButtonState("TRUE");

    setTranscriptButtonState("TRUE");

    setAudioButtonState("TRUE");*/

}



function fnCheckPageCompletion() {

    var isPageCompleted = true;

    for (var i = 0; i < gPageCompCondArr.length; i++) {

        if (gPageCompCondArr[i] != 1) {

            isPageCompleted = false;

            // console.log("inside loop");

        }

    }

    return isPageCompleted;

}



function fnForcePageComplete() {

    for (var i = 0; i < gPageCompCondArr.length; i++) {

        gPageCompCondArr[i] = 1

    }

    fnSetPageComp();

}



function fnAudioProgressBar(currTime, totalTime) {

    $('.progressToolTip').attr('data', fnAudioProgressTime(currTime, totalTime));

    var perDone = Math.round((currTime / totalTime) * 100);



    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {

        if (perDone > 94) {

            perDone = 100;

        }

    }



    if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) == 9) {

        if (perDone > 95) {

            perDone = 100;

        }

    }

    if (!isNaN(perDone)) {

        $("#progressbar").progressbar({

            value: perDone

        });

        $("#slider").slider("value", perDone);

    }

}



function fnResetAudioProgressBar() {

    isPaused = false

    var perDone = 0;

    $("#progressbar").progressbar({

        value: perDone

    });

    $("#slider").slider("value", perDone);

}



function fnHideShowAudioPlayer(isToHide) {

    if (isToHide) {

        $("#jp_container_1").css("visibility", "hidden");

        $("#progressbar,#slider").css("visibility", "hidden");

        $(".progressToolTip").css("visibility", "hidden");

        $('#clsPlayPauseBtn').css("visibility", "hidden");

    } else {

        $("#jp_container_1").css("visibility", "visible");

        $("#progressbar,#slider").css("visibility", "visible");

        $(".progressToolTip").css("visibility", "visible");

        $('#clsPlayPauseBtn').css("visibility", "visible");

    }

}



function fnChangeTitleText(str) {

    $("#pgTitleFrame").html('<span id="spnPgTitleTxt">' + str + '</span>');

}



function fnAudioProgressTime(currTime, totalTime) {

    return (msToTime(currTime) + ' / ' + msToTime(totalTime));

}



function msToTime(s) {

    var ms = s % 1000;

    s = (s - ms) / 1000;

    var secs = s % 60;

    s = (s - secs) / 60;

    var mins = s % 60;

    var hrs = (s - mins) / 60;

    var secss = secs.toPrecision(2);

    var mss = ms.toPrecision(2);

    if (parseInt(secss) < 10) {

        secss = Math.floor(secss);

        secss = '0' + secss;

    }

    if (parseInt(mss) < 10) {

        mss = Math.floor(mss);

        mss = '0' + mss;

    }

    if (secss > 0) {

        return secss + ':' + mss;

    } else {

        return '00:' + mss;

    }

}



function fnIsCourseCompleted() {

    for (var i = 0; i < gModuleArr.length; i++) {

        var lArrLessons = gModuleArr[i].Lessons;

        for (var j = 0; j < lArrLessons.length; j++) {

            var lArrTopics = lArrLessons[j].Topics;

            for (var k = 0; k < lArrTopics.length; k++) {

                var lArrPages = lArrTopics[k].Pages;

                for (var l = 0; l < lArrPages.length; l++) {

                    if (lArrPages[l].attr("MARKCOURSECOMPLETION") == "T") {

                        return (fCheckCompletion(gModuleArr[i].Lessons[j].Topics[k].Pages[l], "Page"));

                    }

                }

            }

        }

    }

    return false;

}



function fnJumptoAcknowledgmentPage() {

    var ackPage = undefined;

    for (var i = 0; i < gModuleArr.length; i++) {

        var lArrLessons = gModuleArr[i].Lessons;

        for (var j = 0; j < lArrLessons.length; j++) {

            var lArrTopics = lArrLessons[j].Topics;

            for (var k = 0; k < lArrTopics.length; k++) {

                var lArrPages = lArrTopics[k].Pages;

                for (var l = 0; l < lArrPages.length; l++) {

                    if (lArrPages[l].attr("MARKCOURSECOMPLETION") == "T") {

                        ackPage = gModuleArr[i].Lessons[j].Topics[k].Pages[l].attr("ID");

                    }

                }

            }

        }

    }

    if (ackPage != undefined) {

        fnJumpToPageByID(ackPage);

    }

}



function fnAudioFinished() {

    isAudioStreamPlaying = false;

    $("#jplayerPlay").removeClass("jp-play");

    $("#jplayerPlay").addClass("jp-play-deactive");

    fnSetCurrSndObj(null);

    fnSetPageComp();

}



function fnGetUserName() {

    return (BVScorm_GetUserName());

}



function fnIsInActivity() {

    isInActivity = true;

}



function fnIsNotInActivity() {

    isInActivity = false;

}



function fnShowHidePlayerControls(val) {

    if (val) {

        $('#clsBackBtn').css('display', 'block');

        $('#clsNxtBtn').css('display', 'block');

        $('#clsMnuBtn').css('display', 'block');

        $('#clsHelpBtn').css('display', 'block');

        //$('#clsReplay').css('display', 'block');



        $('#clsForwardBtn').css('display', 'block');

        $('#clsRevBtn').css('display', 'block');



        if (fnCheckPageComplection(gModuleArr[gCurrMod].Lessons[gCurrLess].Topics[gCurrTop].Pages[gCurrPage].attr("ID"))) {

            if ($("#clsNxtBtn").hasClass("clsEnaNxtBtn")) {

                //$(".nextInst").show();

            }

        }

    } else {

        $('#clsBackBtn').css('display', 'none');

        $('#clsNxtBtn').css('display', 'none');

        $('#clsMnuBtn').css('display', 'none');

        $('#clsHelpBtn').css('display', 'none');

        $('#clsReplay').css('display', 'none');



        $('#clsForwardBtn').css('display', 'none');

        $('#clsRevBtn').css('display', 'none');

        /*if( fnCheckPageComplection(gModuleArr[gCurrMod].Lessons[gCurrLess].Topics[gCurrTop].Pages[gCurrPage].attr("ID")) ){

        	$(".nextInst").hide();

        }*/

    }

}



//tracking functions

function set(ID, value) {

    with(parent) {

        //set identifier if not already been set (now only set once)

        if (course.trackedObjects[course.currentSco.currentPage.trackingid] != 1 || (course.trackedObjects[course.currentSco.currentPage.trackingid] == 1 && course.currentSco.currentPage.parentItem.onePage != null)) {

            course.trackedObjects[ID] = value;

            //if the page is complete and progress hasnt already been incremented

            if (course.trackedObjects[course.currentSco.currentPage.trackingid] == 1 && course.currentSco.currentPage.updateProgress == true) {

                course.progressInd += 1; //increment the progress indicator

                course.currentSco.currentPage.updateProgress = false; //set the page so doesnt increment again

                // if object loaded (progress.js)

                if (course.currentSco.currentPage.objLoaded == true) {

                    getProgressImage(); //call function in progress.js to update progress image

                }

            }

        }

        if (course.lockdown == MODE_LOCK && course.trackedObjects[course.currentSco.currentPage.trackingid] == 1 && course.currentSco.currentPage.parentItem.onePage != true) {

            unblock();

        } else if (course.lockdown == MODE_LOCK && course.trackedObjects[course.currentSco.currentPage.trackingid] == 1 && course.currentSco.currentPage.parentItem.onePage == true && course.trackedObjects[course.currentSco.currentPage.parentItem.trackingid] == 1) {

            unblock();

        }

    }

    checkCompletion1();

}



function checkCompletion1() {

    var totalKeys = 0,

        completedKeys = 0;

    for (var key in parent.course.trackedObjects) {

        if (typeof(parent.course.trackedObjects[key]) == 'number') {

            totalKeys++;

            if (parent.course.trackedObjects[key] == 1) {

                completedKeys++;

            }

        }

    }

    if (completedKeys == totalKeys) {

        parent.course.commit();

    }

}



function get(ID) {

    return parent.course.trackedObjects[ID]

}



//status functions

function completion() {

    var sum = 0;

    for (var i = 0; i < completion.aruments.length; i++) {

        sum += get(completion.arguments[i]);

    }

    var retval = (sum / completion.aruments.length);

    if (retval != 0 && retval != 2) {

        retval = 1;

    }

    return retval

}



function chckPageVisited(pageId) {

    for (var i = 0; i < gPageTrackingArr.length; i++) {

        if (gPageTrackingArr[i].id == pageId) {

            pageTracking = gPageTrackingArr[i]

            return true;

        }

    }

    return false;

}



function fCreateObjToArr(lObj) {

    if (lObj[0] == undefined && lObj != undefined) {

        lTempAObject = lObj;

        lObj = new Array();

        lObj[0] = lTempAObject;

    }

    return lObj;

}



////To resize page;

function resizeFrame() {

    return;

}

////End Resize;



function isSTab() {

    return navigator.platform.toLowerCase().indexOf("linux") == 0;

}

function SetVolume(volu){
   var playerVol= document.getElementById("audioplayer");
   playerVol.volume= volu/100;
}

function onAudioStart() {

    //disabled slider here for show progressbar

    //fnDisableGlobalSlider();

    /*if( _currAudioPlayingPath != null ) {

    	fnHidePreloader();

    	fnEnablePlay();

    }*/

    if (isProgressBarDisabled == true) {

        $("#ctrl_slider a").css("cursor", "default")

        $("#slider").slider({

            disabled: true

        }).draggable("disable");

        $(".ui-state-disabled").css("opacity", "1");

        $("#id_sliderContainer a").addClass("clsProgressBar");

    }



    if (!isAndroid) {

        if (_currAudioPlayingPath != null) {

            fnEnablePlay();

            /*Added to solve Audio Cutting issue*/

            if (audioObjRef != "" && !audioObjRef.paused) {



                if (audioObjRef.currentTime < 0.5) {

                    matchAudioTimeWithTimeline();

                    /*done to pause the mastertimeline and to match with audio */

                    if (!isAndroid) {

                        $(".clsPreloaderAudio").css("display", "none");

                        //$(".clsPreloader").css("display", "none");

                        masterTimeline.play();

                    }

                }

            }

        }

    }

}

/*This function is added to solve audio duration issue on Android tab*/

function onAudioCanPlay() {

    if (_currAudioPlayingPath != null) {

        fnEnablePlay();

        //Added to solve Audio Cutting issue

        if (audioObjRef != "" && !audioObjRef.paused) {

            if (audioObjRef.currentTime < 0.5) {

                matchAudioTimeWithTimeline();

                if (isAndroid) {

                    // setTimeout(function () {



                    $(".clsPreloaderAudio").css("display", "none");

                    //$(".clsPreloader").css("display", "none");

                    masterTimeline.play();

                    //  }, 1000);

                } else {

                    $(".clsPreloaderAudio").css("display", "none");

                    // $(".clsPreloader").css("display", "none");

                    masterTimeline.play();

                }

            }

        }

    }

}



function sliderEnable() {

    /*$( "#slider" ).slider({ disabled: false }).draggable("enable");

    $(".ui-slider-handle").css("cursor","pointer");

    $( ".ui-slider-range,.ui-slider-handle" ).css("opacity","1")

    $(".ui-slider-handle").css({'background-color': '#F6F6F6','border': '1px solid #CCC'});

    $( "#progressbar" ).progressbar({value: 0});

    $( "#slider" ).slider( "value", 0 );*/

    setPlayPauseButtonState("FALSE");

    setTranscriptButtonState("FALSE");

    setAudioButtonState("FALSE");

}



function sliderDisable() {

    // console.log("disable");

    $("#slider").slider("value", 100);

    //$("#slider" ).slider({ disabled: true });

    //$( "#slider" ).slider({ disabled: true }).draggable("disable");

    /*	$("#slider").css({'opacity': '1','filter':'Alpha(Opacity=100)'});

    	$(".ui-slider-handle").css({'background-color': '#888888','border': '1px solid #888888'});

    	$(".ui-slider-handle").css("cursor","default");

    	$(".ui-slider-range" ).css("opacity","0.5")

    	$( "#progressbar" ).progressbar({value: 100});*/

}



function onAudioEnd() {

    //sliderDisable()

    bAudioCompleted = true;

    bAudioPlaying = false;

    isPaused = true;

    if (!isIntroPage) {

        fnDisablePlay();

        try {

            fnCheckAndMarkItemCompleted();

        } catch (e) {}

        fnSetPageComp();

    }

    fnSetCurrSndObj(null);

}



function StopCurrSndObj() {

    sliderDisable();

    fnSetCurrSndObj(null);

    setPlayPauseButtonState("TRUE");

}



var audioObjRef = ""; //To hold reference to the audio tag in player html

var fallbackFlashRef = ""; //To hold reference of fallback flash object



function replayAudio() {

    initAudioPlayer(_currAudioPlayingPath);

}



var bCallBackAdded = false;



function initAudioPlayer(audioPathParam) {

    //x

    //fnShowPreLoader();

    if (audioObjRef == "") {

        audioObjRef = document.getElementById("audioplayer");

        audioObjRef.loop = false;

    }



    initAudioSource(audioPathParam);



    console.log("audio path" + audioPathParam);

}



function initAudioSource(audioPathParam) {

    audioObjRef.setAttribute('src', audioPathParam + '.mp3');

    audioObjRef.setAttribute('type', 'audio/mpeg');



    /*To generate timeline object*/

    generateTimeLine();

    currentAudioObj = 1;

    audioObjRef.load();

    //audioObjRef.play();

    //masterTimeline.play();

    setTimeout(function() {

        matchAudioTimeWithTimeline()

    }, 1000);

    bAudioPlaying = true;

    isPaused = false

    sliderEnable();

}



function playPauseAudio() {

    if (videoObjectId) {
        if (videoObjectId.currentTime >= videoObjectId.duration) {
            return;
        }

        if (videoPlaying) {
            if (videoPausedBefore) {
                videoObjectId.play();
                $('#clsPlayPauseBtn').removeClass("clsPlay");
                $('#clsPlayPauseBtn').addClass("clsPause");
                // Below line is added for 508 accessibility.
                $('#clsPlayPauseBtn').attr("title", "Pause");
                $('#clsPlayPauseBtn span.tooltip').html("Pause");
                videoPlaying = true;
                videoPausedBefore = false;
            } else {
                videoObjectId.pause();
                $('#clsPlayPauseBtn').removeClass("clsPause");
                $('#clsPlayPauseBtn').addClass("clsPlay");
                // Below line is added for 508 accessibility.
                $('#clsPlayPauseBtn').attr("title", "Play");
                $('#clsPlayPauseBtn span.tooltip').html("Play");
                videoPlaying = false;
            }
        } else {
            videoObjectId.play();
            $('#clsPlayPauseBtn').removeClass("clsPlay");
            $('#clsPlayPauseBtn').addClass("clsPause");
            // Below line is added for 508 accessibility.
            $('#clsPlayPauseBtn').attr("title", "Pause");
            $('#clsPlayPauseBtn span.tooltip').html("Pause");
            videoPlaying = true;
        }
        return;
    }

    if (bAudioPlaying && bAudioDisable.toUpperCase() != "TRUE") {

        if (gModuleArr[gCurrMod].Lessons[gCurrLess].Topics[gCurrTop].Pages[gCurrPage].attr("ISVIDEO") == "Y") {

            if (document.getElementById("myVideo")) {
                document.getElementById("myVideo").pause();
            }

        }



        if (typeof(audioObjRef) != "string") {

            masterTimeline.pause();

            audioObjRef.pause();

        }

        //added for menu issue

        if ($('#clsPlayPauseBtn').hasClass("clsPlayDisable")) {} else {
            $('#clsPlayPauseBtn').removeClass("clsPause");
            $('#clsPlayPauseBtn').addClass("clsPlay");
            // Below line is added for 508 accessibility.
            $('#clsPlayPauseBtn span.tooltip').html("Play");
        }
    } else {
        if (gModuleArr[gCurrMod].Lessons[gCurrLess].Topics[gCurrTop].Pages[gCurrPage].attr("ISVIDEO") == "Y") {
            if (document.getElementById("myVideo")) {
                document.getElementById("myVideo").play();
            }

        }

        if (typeof(audioObjRef) != "string") {

            /*Added to solve Audio repeat issue on Mac safari*/

            if ((parseInt(masterTimeline.duration()) != 0)) {

                if (isSliderDisable) {

                    masterTimeline.play();

                    audioObjRef.play();

                } else {

                    if (currentAudioObj != 0) {

                        masterTimeline.play();

                        audioObjRef.play();

                    }

                }

            }

        }



        //added for menu issue

        if (!$('#clsPlayPauseBtn').hasClass("clsPlayDisable")) {
            $('#clsPlayPauseBtn').removeClass("clsPlay");
            $('#clsPlayPauseBtn').addClass("clsPause");
            // Below line is added for 508 accessibility.
            $('#clsPlayPauseBtn').attr("title", "Pause");
            $('#clsPlayPauseBtn span.tooltip').html("Pause");
        }

    }

    bAudioPlaying = !(bAudioPlaying);

}



function setPlayPauseButtonState(audioStateParam) {
    if (audioStateParam.toUpperCase() == "TRUE") {
        $("#clsPlayPauseBtn").removeClass("clsPlay");
        $("#clsPlayPauseBtn").removeClass("clsPause");
        $('#clsPlayPauseBtn').addClass("clsPlayDisable");
        sliderDisable();
    } else {
        $('#clsPlayPauseBtn').removeClass("clsPlayDisable");
        $('#clsPlayPauseBtn').addClass("clsPlay");
        // Below line is added for 508 accessibility.
        $('#clsPlayPauseBtn').attr("title", "Play");
        $('#clsPlayPauseBtn span.tooltip').html("Play");
    }
    // Below line is added for 508 accessibility.
    update508ForPlayerCtrl();
}

function EnableFooterButtons(buttonState) {
    if (buttonState) {
        $("#clsNxtBtn").removeClass("clsDisNxtBtn");
        $("#clsBackBtn").removeClass("clsDisBackBtn");
        $("#clsPlayPauseBtn").removeClass("clsPlayDisable");
        $("#clsReplay").removeClass("clsReplayDis");
        $("#clsAudioOnBtn,#clsAudioOffBtn").removeClass("clsAudioDis");
        $("#transcriptBtn").removeClass("clsTransBtnDisable");
    } else {
        $("#clsNxtBtn").addClass("clsDisNxtBtn");
        $("#clsBackBtn").addClass("clsDisBackBtn");
        $("#clsPlayPauseBtn").addClass("clsPlayDisable");
        $("#clsReplay").addClass("clsReplayDis");
        $("#clsAudioOnBtn,#clsAudioOffBtn").addClass("clsAudioDis");
        $("#transcriptBtn").addClass("clsTransBtnDisable");
    }
}

function setMenuButtonState(transState) {

    if (transState.toUpperCase() == "TRUE") {

        $("#clsMnuBtn").css("opacity", "0.5");

        $("#clsMnuBtn").css("cursor", "default");

    } else {

        $("#clsMnuBtn").css("opacity", "1");

        $("#clsMnuBtn").css("cursor", "pointer");

    }

}



function setAudioButtonState(audioState) {

    if (audioState.toUpperCase() == "TRUE") {
console.log('inside audio func 1')
        $("#clsAudioOffBtn").css("display", "none");

        $("#clsAudioOnBtn").css("display", "inline");

        $("#clsAudioOnBtn,#clsAudioOffBtn").addClass("clsAudioDis");

        $("#clsAudioOnBtn").css("cursor", "default");

    } else {
        console.log('inside audio func 1 else')

        $("#clsAudioOnBtn").css("cursor", "pointer");

        $("#clsAudioOnBtn,#clsAudioOffBtn").removeClass("clsAudioDis");

        if (isAudioEnable) {

            console.log('inside audio func 2 ')
            $("#clsAudioOffBtn").css("display", "none");

            $("#clsAudioOnBtn").css("display", "inline");

        } else {
            console.log('inside audio func 2 else')
            $("#clsAudioOnBtn").css("display", "none");

            $("#clsAudioOffBtn").css("display", "inline");

        }

    }

}



function setNxtBckButtonState(transState) {

    if (transState.toUpperCase() == "TRUE") {

        $("#clsNxtBtn").addClass("clsDisNxtBtn");

        $("#clsBackBtn").addClass("clsDisBackBtn");

    } else {

        $("#clsNxtBtn").removeClass("clsDisNxtBtn");

        $("#clsBackBtn").removeClass("clsDisBackBtn");

    }

}



function setReplayButtonState(transState) {

    if (transState.toUpperCase() == "TRUE") {

        $("#clsReplay").addClass("clsReplayDis");

    } else {

        $("#clsReplay").removeClass("clsReplayDis");

    }

}



function setTranscriptButtonState(transState) {

    if (transState.toUpperCase() == "TRUE" || transcriptDisable.toLowerCase() == 't') {

        fnhideTranscript();

        $("#transcriptBtn").removeClass().addClass("clsTransBtnDisable");

    } else {

        $("#transcriptBtn").removeClass("clsTransBtnDisable");

        if (isTransEnable) {

            $("#transcriptBtn").removeClass("clsTransOnBtn");

            $("#transcriptBtn").addClass("clsTransOffBtn").addClass("activcls");

            $("#transcriptBtn span").html("TRANSCRIPT OFF");

            fnshowTranscript();

        } else {

            $("#transcriptBtn").removeClass("clsTransOffBtn");

            $("#transcriptBtn").addClass("clsTransOnBtn").addClass("activcls");

            $("#transcriptBtn span").html("TRANSCRIPT ON");

            fnhideTranscript();

        }

    }

}



function fnEnablePlay() {
    //added for menu issue
    if ($('#clsPlayPauseBtn').hasClass("clsPlayDisable")) {
        return;
    }
    $('#clsPlayPauseBtn').removeClass("clsPlayDisable");
    $('#clsPlayPauseBtn').removeClass("clsPlay");
    $('#clsPlayPauseBtn').addClass("clsPause");
    // Below line is added for 508 accessibility.
    $('#clsPlayPauseBtn').attr("title", "Pause");
    $('#clsPlayPauseBtn span.tooltip').html("Pause");
    //$("#clsPlayPauseBtn").css("cursor", "pointer");
}

function fnDisablePlay() {
    $("#clsPlayPauseBtn").removeClass("clsPlay");
    $("#clsPlayPauseBtn").removeClass("clsPause");
    $('#clsPlayPauseBtn').addClass("clsPlayDisable");
    $("#clsPlayPauseBtn").css("cursor", "default");
    currentAudioObj = 0;
    sliderDisable();
}



function fnHideShellBtn(instanceObj, lcase) {

    (lcase) ? (instanceObj.css("visibility", "hidden")) : (instanceObj.css("visibility", "visible"));

}



function fnDisableShellBtn(instanceObj, lcase) {

    if ((lcase) && (instanceObj.hasClass("activcls"))) {

        instanceObj.toggleClass("activcls");

    } else if ((!lcase) && (!instanceObj.hasClass("activcls"))) {

        instanceObj.toggleClass("activcls");

    }

}



function fnDisablePlayerButton(val) {
console.log('inside disable')
    if (val) {

        $("#clsMnuBtn").css("opacity", "0.5");

        $("#clsMnuBtn").css("cursor", "default");

        $("#clsHelpBtn").css("opacity", "0.5");

        $("#clsHelpBtn").css("cursor", "default");

        $("#clsGlosBtn").css("opacity", "0.5");

        $("#clsGlosBtn").css("cursor", "default");

        $("#clsRefBtn").css("opacity", "0.5");

        $("#clsRefBtn").css("cursor", "default");

        $("#clsVideoRefBtn").css("opacity", "0.5");

        $("#clsVideoRefBtn").css("cursor", "default");

        setPlayPauseButtonState("TRUE");

        setTranscriptButtonState("TRUE");

        setAudioButtonState("TRUE");

        setReplayButtonState("TRUE");

        $("#clsMnuBtn").addClass("clsMnuBtnDis");

        $("#clsHelpBtn").addClass("clsHelpBtnDis");

        $("#clsGlosBtn").addClass("clsGlosDisabled");

        $("#clsRefBtn").addClass("clsRefDis");

        $("#clsVideoRefBtn").addClass("clsVideoRefBtnDis");

    } else {

        $("#clsMnuBtn").removeClass("clsMnuBtnDis");

        $("#clsHelpBtn").removeClass("clsHelpBtnDis");

        $("#clsGlosBtn").removeClass("clsGlosDisabled");

        $("#clsRefBtn").removeClass("clsRefDis");

        $("#clsVideoRefBtn").removeClass("clsVideoRefBtnDis");

        $("#clsMnuBtn").css("opacity", "1");

        $("#clsMnuBtn").css("cursor", "pointer");

        $("#clsHelpBtn").css("opacity", "1");

        $("#clsHelpBtn").css("cursor", "pointer");

        $("#clsGlosBtn").css("opacity", "1");

        $("#clsGlosBtn").css("cursor", "pointer");

        $("#clsRefBtn").css("opacity", "1");

        $("#clsRefBtn").css("cursor", "pointer");

        $("#clsVideoRefBtn").css("opacity", "1");

        $("#clsVideoRefBtn").css("cursor", "pointer");



        setPlayPauseButtonState("FALSE");

        setTranscriptButtonState("FALSE");

        setAudioButtonState("FALSE");

        setReplayButtonState("FALSE");

    }

}

/**for saving the assessment score**/

function fnSetAssesmentData() {

    var assessmentObj = new Object();

    assessmentObj.aCurrentQuestion = aCurrentQuestion;

    assessmentObj.questiontext = questiontext;

    assessmentObj.userSelectionArray = userSelectionArray;

    assessmentObj.correctAnsArray = correctAnsArray;

    assessmentObj.isCorrect = isCorrect;

    assessmentObj.topicIdForQue = topicIdForQue;

    assessmentArray[aCurrentQuestion] = assessmentObj;

}



function fSendCouseToServerPage() {

    var CourseID = "01Pai201601";

    var UniqueID = fTimeStamp();



    $.ajax({

        type: "POST",

        url: "http://elseviernetcme.istream4.prev.datacon.nl/ElsevierNET-cme/certificate/CompleteCourse.aspx?CourseID=" + CourseID + "&UniqueID=" + UniqueID,

        data: $("#myform").serialize(),

        success: function(data) {}

    });

}



function fTimeStamp() {

    var currDate = new Date();

    var D = currDate.getDate();

    var M = currDate.getMonth() + 1;

    var Y = currDate.getFullYear();

    var T = currDate.getTime();

    //var theDate:String = (M + "/" + D + "/" + Y);

    var theTimeStamp = (M + "" + D + "" + Y + "" + T);

    return theTimeStamp.toString()

}



function iOSversion() {

    if (/iP(hone|od|ad)/.test(navigator.platform)) {

        // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>

        var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);

        return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];

    }

}

function setVideoRef(videoId) {
    videoObjectId = videoId;
    videoPausedBefore = false;
}


function setVideoObjectSimulation(videoId) {

    if (videoId == "") {

        return;

    }

    videoObjectId = videoId;

    videoPausedBefore = false;

    //video mute button control

    var tempStr = $("#clsAudioOffBtn").css("display")

    var videoObj = document.getElementById("" + videoId);

    videoObjectId = document.getElementById("" + videoId);





    // below code resolves mac safari full screen exit player alignment issue by sachin

    $('#' + videoId).bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(e) {

        var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;

        var event = state ? 'FullscreenOn' : 'FullscreenOff';

        if (event == "FullscreenOff")

            resizeFrame();

    });

}



function screen_lock() {

    $(".screen_lock").show();

    setTimeout(function() { $(".screen_lock").hide(); }, 2300);

}





function gnGetPage15() {

    $("#topFrame .home-btn").hide();

    var lCurrPgNum, lCurrTopNum, lCurrLessNum, lCurrModNum;

    lCurrPgNum = gCurrPage;

    lCurrTopNum = gCurrTop;

    lCurrLessNum = gCurrLess;

    lCurrModNum = gCurrMod;

    var lPageId = "M1L0T1P2";

    var _getCount = __curConCordVisit + __curMateoVisit;

    $("#contentContainer").removeClass("sugar");

    if (_getCount == 2) {

        //$(this).hide();

        $(".back-btn").show();

        __backBtnEnable = true;

        fnJumpToPageByID("M1L0T1P14");

    } else {

        //$(this).hide();

        $(".back-btn").show();

        __backBtnEnable = true;

        fnJumpToPageByID(lPageId);

    }





}



function gnGetPage16() {

    //$("#topFrame .home-btn").hide();

    var lCurrPgNum, lCurrTopNum, lCurrLessNum, lCurrModNum;

    lCurrPgNum = gCurrPage;

    lCurrTopNum = gCurrTop;

    lCurrLessNum = gCurrLess;

    lCurrModNum = gCurrMod;

    var lPageId = "M1L0T1P3";

    fnJumpToPageByID(lPageId);

}



function gnGetPage17() {

    //$("#topFrame .home-btn").hide();

    var lCurrPgNum, lCurrTopNum, lCurrLessNum, lCurrModNum;

    lCurrPgNum = gCurrPage;

    lCurrTopNum = gCurrTop;

    lCurrLessNum = gCurrLess;

    lCurrModNum = gCurrMod;

    var lPageId = "M1L0T1P3";

    fnJumpToPageByID(lPageId);

}
function restrictBacknMenuOnAssistment(){
    if( prevPageRedirect && isInArray(prevPageRedirect, ["M1L0T1P59_1", "M1L0T1P59_2", "M1L0T1P59_3", "M1L0T1P59_4", "M1L0T1P59_5", "M1L0T1P59_6"])){
        $("#clsMnuBtn, #clsBackBtn").css('pointer-events', 'none');
        $("#clsPageNumber").hide();
    }
}