function SCORMapi1_3(initialData = null, scorm = 0, user = 0, url = '', token) {
    var CMIString200 = '^[\u0000-\uFFFF]{0,200}$';
    var CMIString250 = '^[\u0000-\uFFFF]{0,250}$';
    var CMIString1000 = '^[\u0000-\uFFFF]{0,1000}$';
    var CMIString4000 = '^[\u0000-\uFFFF]{0,4000}$';
    var CMIString64000 = '^[\u0000-\uFFFF]{0,64000}$';
    var CMILang = '^([a-zA-Z]{2,3}|i|x)(\-[a-zA-Z0-9\-]{2,8})?$|^$';
    var CMILangString250 = '^(\{lang=([a-zA-Z]{2,3}|i|x)(\-[a-zA-Z0-9\-]{2,8})?\})?([^\{].{0,250}$)?';
    var CMILangcr = '^((\{lang=([a-zA-Z]{2,3}|i|x)?(\-[a-zA-Z0-9\-]{2,8})?\}))(.*?)$';
    var CMILangString250cr = '^((\{lang=([a-zA-Z]{2,3}|i|x)?(\-[a-zA-Z0-9\-]{2,8})?\})?(.{0,250})?)?$';
    var CMILangString4000 = '^(\{lang=([a-zA-Z]{2,3}|i|x)(\-[a-zA-Z0-9\-]{2,8})?\})?([^\{].{0,4000}$)?';
    var CMITime = '^(19[7-9]{1}[0-9]{1}|20[0-2]{1}[0-9]{1}|203[0-8]{1})((-(0[1-9]{1}|1[0-2]{1}))((-(0[1-9]{1}|[1-2]{1}[0-9]{1}|3[0-1]{1}))(T([0-1]{1}[0-9]{1}|2[0-3]{1})((:[0-5]{1}[0-9]{1})((:[0-5]{1}[0-9]{1})((\.[0-9]{1,2})((Z|([+|-]([0-1]{1}[0-9]{1}|2[0-3]{1})))(:[0-5]{1}[0-9]{1})?)?)?)?)?)?)?)?$';
    //var CMITimespan = '^P(\\d+Y)?(\\d+M)?(\\d+D)?(T(((\\d+H)(\\d+M)?(\\d+(\.\\d{1,2})?S)?)|((\\d+M)(\\d+(\.\\d{1,2})?S)?)|((\\d+(\.\\d{1,2})?S))))?$';
    var CMITimespan = '^P(\\d+Y)?(\\d+M)?(\\d+D)?(T(((\\d+H)(\\d+M)?(\\d+(\.\\d{1,2})?S)?)|((\\d+M)(\\d+(\.\\d{1,2})?S)?)|((\\d+(\.\\d{1,2})?S))))?$';
    var CMIInteger = '^\\d+$';
    var CMISInteger = '^-?([0-9]+)$';
    var CMIDecimal = '^-?([0-9]{1,5})(\\.[0-9]{1,18})?$';
    var CMIIdentifier = '^\\S{0,250}[a-zA-Z0-9]$';
    var CMIShortIdentifier = '^[\\w\.]{1,250}$';
    var CMILongIdentifier = '^\\S{0,4000}[a-zA-Z0-9]$';
    var CMIFeedback = '^.*$';
    var CMIIndex = '[._](\\d+).';
    var CMIIndexStore = '.N(\\d+).';
    var CMICStatus = '^completed$|^incomplete$|^not attempted$|^unknown$';
    var CMISStatus = '^passed$|^failed$|^unknown$';
    var CMIExit = '^time-out$|^suspend$|^logout$|^normal$|^$';
    var CMIType = '^true-false$|^choice$|^(long-)?fill-in$|^matching$|^performance$|^sequencing$|^likert$|^numeric$|^other$';
    var CMIResult = '^correct$|^incorrect$|^unanticipated$|^neutral$|^-?([0-9]{1,4})(\\.[0-9]{1,18})?$';
    var NAVEvent = '^previous$|^continue$|^exit$|^exitAll$|^abandon$|^abandonAll$|^suspendAll$|^{target=\\S{0,200}[a-zA-Z0-9]}choice$';
    var NAVBoolean = '^unknown$|^true$|^false$';
    var NAVTarget = '^previous$|^continue$|^choice.{target=\\S{0,200}[a-zA-Z0-9]}$'
    var cmi_children = '_version, comments_from_learner, comments_from_lms, completion_status, credit, entry, exit, interactions, launch_data, learner_id, learner_name, learner_preference, location, max_time_allowed, mode, objectives, progress_measure, scaled_passing_score, score, session_time, success_status, suspend_data, time_limit_action, total_time';
    var comments_children = 'comment, timestamp, location';
    var score_children = 'max, raw, scaled, min';
    var objectives_children = 'progress_measure, completion_status, success_status, description, score, id';
    var correct_responses_children = 'pattern';
    var student_data_children = 'mastery_score, max_time_allowed, time_limit_action';
    var student_preference_children = 'audio_level, audio_captioning, delivery_speed, language';
    var interactions_children = 'id, type, objectives, timestamp, correct_responses, weighting, learner_response, result, latency, description';
    var scaled_range = '-1#1';
    var audio_range = '0#*';
    var speed_range = '0#*';
    var text_range = '-1#1';
    var progress_range = '0#1';
    var learner_response = {
        'true-false': { 'format': '^true$|^false$', 'max': 1, 'delimiter': '', 'unique': false },
        'choice': { 'format': CMIShortIdentifier, 'max': 36, 'delimiter': '[,]', 'unique': true },
        'fill-in': { 'format': CMILangString250, 'max': 10, 'delimiter': '[,]', 'unique': false },
        'long-fill-in': { 'format': CMILangString4000, 'max': 1, 'delimiter': '', 'unique': false },
        'matching': { 'format': CMIShortIdentifier, 'format2': CMIShortIdentifier, 'max': 36, 'delimiter': '[,]', 'delimiter2': '[.]', 'unique': false },
        'performance': { 'format': '^$|' + CMIShortIdentifier, 'format2': CMIDecimal + '|^$|' + CMIShortIdentifier, 'max': 250, 'delimiter': '[,]', 'delimiter2': '[.]', 'unique': false },
        'sequencing': { 'format': CMIShortIdentifier, 'max': 36, 'delimiter': '[,]', 'unique': false },
        'likert': { 'format': CMIShortIdentifier, 'max': 1, 'delimiter': '', 'unique': false },
        'numeric': { 'format': CMIDecimal, 'max': 1, 'delimiter': '', 'unique': false },
        'other': { 'format': CMIString4000, 'max': 1, 'delimiter': '', 'unique': false }
    }

    var correct_responses = {
        'true-false': {
            'pre': '', 'max': 1, 'delimiter': '', 'unique': false, 'duplicate': false,
            'format': '^true$|^false$',
            'limit': 1
        },
        'choice': {
            'pre': '', 'max': 36, 'delimiter': '[,]', 'unique': true, 'duplicate': false,
            'format': CMIShortIdentifier
        },
        'fill-in': {
            'pre': '',
            'max': 10, 'delimiter': '[,]', 'unique': false, 'duplicate': false,
            'format': CMILangString250cr
        },
        'long-fill-in': {
            'pre': '^(\{case_matters=(true|false)\})?', 'max': 1, 'delimiter': '', 'unique': false, 'duplicate': true,
            'format': CMILangString4000
        },
        'matching': {
            'pre': '', 'max': 36, 'delimiter': '[,]', 'delimiter2': '[.]', 'unique': false, 'duplicate': false,
            'format': CMIShortIdentifier, 'format2': CMIShortIdentifier
        },
        'performance': {
            'pre': '^(\{order_matters=(true|false)\})?',
            'max': 250, 'delimiter': '[,]', 'delimiter2': '[.]', 'unique': false, 'duplicate': false,
            'format': '^$|' + CMIShortIdentifier, 'format2': CMIDecimal + '|^$|' + CMIShortIdentifier
        },
        'sequencing': {
            'pre': '', 'max': 36, 'delimiter': '[,]', 'unique': false, 'duplicate': false,
            'format': CMIShortIdentifier
        },
        'likert': {
            'pre': '', 'max': 1, 'delimiter': '', 'unique': false, 'duplicate': false,
            'format': CMIShortIdentifier,
            'limit': 1
        },
        'numeric': {
            'pre': '', 'max': 2, 'delimiter': '[:]', 'unique': false, 'duplicate': false,
            'format': CMIDecimal,
            'limit': 1
        },
        'other': {
            'pre': '', 'max': 1, 'delimiter': '', 'unique': false, 'duplicate': false,
            'format': CMIString4000,
            'limit': 1
        }
    }

    var defaultData = {};
    var sco = 0;
    var attempt = 0;

    if (initialData !== null) {
        defaultData = initialData;
        sco = defaultData['sco'];
    } else {
        defaultData['cmi.completion_status'] = '';
        defaultData['cmi.exit'] = '';
        defaultData['cmi.location'] = '';
        defaultData['cmi.score.raw'] = '';
        defaultData['cmi.score.max'] = '';
        defaultData['cmi.suspend_data'] = '';
        defaultData['cmi.success_status'] = '';
        defaultData['cmi.total_time'] = 'PT0H0M0S';
        defaultData['cmi.learner_id'] = '';
        defaultData['cmi.learner_name'] = '';
        defaultData['cmi.session_time'] = '';
        defaultData['cmi.interactions._count'] = '0';
    }


    var datamodel = {
        'cmi._children': { 'defaultvalue': cmi_children, 'mod': 'r' },
        'cmi._version': { 'defaultvalue': '1.0', 'mod': 'r' },
        'cmi.comments_from_learner._children': { 'defaultvalue': comments_children, 'mod': 'r' },
        'cmi.comments_from_learner._count': { 'mod': 'r', 'defaultvalue': '0' },
        'cmi.comments_from_learner.n.comment': { 'format': CMILangString4000, 'mod': 'rw' },
        'cmi.comments_from_learner.n.location': { 'format': CMIString250, 'mod': 'rw' },
        'cmi.comments_from_learner.n.timestamp': { 'format': CMITime, 'mod': 'rw' },
        'cmi.comments_from_lms._children': { 'defaultvalue': comments_children, 'mod': 'r' },
        'cmi.comments_from_lms._count': { 'mod': 'r', 'defaultvalue': '0' },
        'cmi.comments_from_lms.n.comment': { 'format': CMILangString4000, 'mod': 'r' },
        'cmi.comments_from_lms.n.location': { 'format': CMIString250, 'mod': 'r' },
        'cmi.comments_from_lms.n.timestamp': { 'format': CMITime, 'mod': 'r' },
        'cmi.completion_status': { 'defaultvalue': defaultData['cmi.completion_status'], 'format': CMICStatus, 'mod': 'rw' },
        'cmi.exit': { 'defaultvalue': defaultData['cmi.exit'], 'format': CMIExit, 'mod': 'w' },
        'cmi.location': { 'defaultvalue': defaultData['cmi.location'], 'format': CMIString1000, 'mod': 'rw' },
        'cmi.progress_measure': { 'defaultvalue': '', 'format': CMIDecimal, 'range': progress_range, 'mod': 'rw' },
        'cmi.scaled_passing_score': { 'defaultvalue': '', 'format': CMIDecimal, 'range': scaled_range, 'mod': 'r' },
        'cmi.score.scaled': { 'defaultvalue': '', 'format': CMIDecimal, 'range': scaled_range, 'mod': 'rw' },
        'cmi.score.raw': { 'defaultvalue': defaultData['cmi.score.raw'], 'format': CMIDecimal, 'mod': 'rw' },
        'cmi.score.min': { 'defaultvalue': '', 'format': CMIDecimal, 'mod': 'rw' },
        'cmi.score.max': { 'defaultvalue': defaultData['cmi.score.max'], 'format': CMIDecimal, 'mod': 'rw' },
        'cmi.suspend_data': { 'defaultvalue': defaultData['cmi.suspend_data'], 'format': CMIString64000, 'mod': 'rw' },
        'cmi.success_status': { 'defaultvalue': defaultData['cmi.success_status'], 'format': CMISStatus, 'mod': 'rw' },
        'cmi.total_time': { 'defaultvalue': defaultData['cmi.total_time'], 'mod': 'r' },
        'cmi.completion_threshold': { 'defaultvalue': null, 'mod': 'r' },
        'cmi.credit': { 'defaultvalue': '', 'mod': 'r' },
        'cmi.entry': { 'defaultvalue': '', 'mod': 'r' },
        'cmi.interactions._children': { 'defaultvalue': interactions_children, 'mod': 'r' },
        'cmi.interactions._count': { 'mod': 'r', 'defaultvalue': defaultData['cmi.interactions._count'] },
        'cmi.interactions.n.id': { 'pattern': CMIIndex, 'format': CMILongIdentifier, 'mod': 'rw' },
        'cmi.interactions.n.type': { 'pattern': CMIIndex, 'format': CMIType, 'mod': 'rw' },
        'cmi.interactions.n.objectives._count': { 'pattern': CMIIndex, 'mod': 'r', 'defaultvalue': '0' },
        'cmi.interactions.n.objectives.n.id': { 'pattern': CMIIndex, 'format': CMILongIdentifier, 'mod': 'rw' },
        'cmi.interactions.n.timestamp': { 'pattern': CMIIndex, 'format': CMITime, 'mod': 'rw' },
        'cmi.interactions.n.correct_responses._count': { 'defaultvalue': '0', 'pattern': CMIIndex, 'mod': 'r' },
        'cmi.interactions.n.correct_responses.n.pattern': { 'pattern': CMIIndex, 'format': CMIFeedback, 'mod': 'rw' },
        'cmi.interactions.n.weighting': { 'pattern': CMIIndex, 'format': CMIDecimal, 'mod': 'rw' },
        'cmi.interactions.n.learner_response': { 'pattern': CMIIndex, 'format': CMIFeedback, 'mod': 'rw' },
        'cmi.interactions.n.result': { 'pattern': CMIIndex, 'format': CMIResult, 'mod': 'rw' },
        'cmi.interactions.n.latency': { 'pattern': CMIIndex, 'format': CMITimespan, 'mod': 'rw' },
        'cmi.interactions.n.description': { 'pattern': CMIIndex, 'format': CMILangString250, 'mod': 'rw' },
        'cmi.launch_data': { 'defaultvalue': null, 'mod': 'r' },
        'cmi.learner_id': { 'defaultvalue': defaultData['cmi.learner_id'], 'mod': 'r' },
        'cmi.learner_name': { 'defaultvalue': defaultData['cmi.learner_name'], 'mod': 'r' },
        'cmi.learner_preference._children': { 'defaultvalue': student_preference_children, 'mod': 'r' },
        'cmi.learner_preference.audio_level': { 'defaultvalue': '1', 'format': CMIDecimal, 'range': audio_range, 'mod': 'rw' },
        'cmi.learner_preference.language': { 'defaultvalue': '', 'format': CMILang, 'mod': 'rw' },
        'cmi.learner_preference.delivery_speed': { 'defaultvalue': '1', 'format': CMIDecimal, 'range': speed_range, 'mod': 'rw' },
        'cmi.learner_preference.audio_captioning': { 'defaultvalue': '0', 'format': CMISInteger, 'range': text_range, 'mod': 'rw' },
        'cmi.max_time_allowed': { 'defaultvalue': null, 'mod': 'r' },
        'cmi.mode': { 'defaultvalue': 'normal', 'mod': 'r' }, 'cmi.objectives._children': { 'defaultvalue': objectives_children, 'mod': 'r' },
        'cmi.objectives._count': { 'mod': 'r', 'defaultvalue': '0' },
        'cmi.objectives.n.id': { 'pattern': CMIIndex, 'format': CMILongIdentifier, 'mod': 'rw' },
        'cmi.objectives.n.score._children': { 'defaultvalue': score_children, 'pattern': CMIIndex, 'mod': 'r' },
        'cmi.objectives.n.score.scaled': { 'defaultvalue': null, 'pattern': CMIIndex, 'format': CMIDecimal, 'range': scaled_range, 'mod': 'rw' },
        'cmi.objectives.n.score.raw': { 'defaultvalue': null, 'pattern': CMIIndex, 'format': CMIDecimal, 'mod': 'rw' },
        'cmi.objectives.n.score.min': { 'defaultvalue': null, 'pattern': CMIIndex, 'format': CMIDecimal, 'mod': 'rw' },
        'cmi.objectives.n.score.max': { 'defaultvalue': null, 'pattern': CMIIndex, 'format': CMIDecimal, 'mod': 'rw' },
        'cmi.objectives.n.success_status': { 'defaultvalue': 'unknown', 'pattern': CMIIndex, 'format': CMISStatus, 'mod': 'rw' },
        'cmi.objectives.n.completion_status': { 'defaultvalue': 'unknown', 'pattern': CMIIndex, 'format': CMICStatus, 'mod': 'rw' },
        'cmi.objectives.n.progress_measure': { 'defaultvalue': null, 'format': CMIDecimal, 'range': progress_range, 'mod': 'rw' },
        'cmi.objectives.n.description': { 'pattern': CMIIndex, 'format': CMILangString250, 'mod': 'rw' },
        'cmi.score._children': { 'defaultvalue': score_children, 'mod': 'r' },
        //'cmi.session_time':{'format':CMITimespan, 'mod':'w', 'defaultvalue': defaultData['cmi.session_time']},
        'cmi.session_time': { 'format': CMITimespan, 'mod': 'w', 'defaultvalue': 'PT0H0M0S' },
        'cmi.time_limit_action': { 'defaultvalue': null, 'mod': 'r' },
        'adl.nav.request': { 'defaultvalue': '_none_', 'format': NAVEvent, 'mod': 'rw' }
    };
    var cmi = new Object();
    cmi.comments_from_learner = new Object();
    cmi.comments_from_learner._count = 0;
    cmi.comments_from_lms = new Object();
    cmi.comments_from_lms._count = 0;
    cmi.interactions = new Object();
    cmi.interactions._count = 0;
    cmi.learner_preference = new Object();
    cmi.objectives = new Object();
    cmi.objectives._count = 0;
    cmi.score = new Object();
    var adl = new Object();
    adl.nav = new Object();
    adl.nav.request_valid = new Array();

    for (element in datamodel) {
        if (element.match(/\.n\./) == null) {
            if ((typeof eval('datamodel["' + element + '"].defaultvalue')) != 'undefined') {
                eval(element + ' = datamodel["' + element + '"].defaultvalue;');
            } else {
                eval(element + ' = "";');
            }
        }
    }
    if (cmi.completion_status == '') {
        cmi.completion_status = 'not attempted';
    }
    var Initialized = false;
    var Terminated = false;
    var diagnostic = '';

    function Initialize(param) {
        errorCode = '0';
        if (param == '') {
            if ((!Initialized) && (!Terminated)) {
                doLog('Initialized SCORM 2004');
                Initialized = true;
                errorCode = '0';
                return 'true';
            } else {
                if (Initialized) {
                    errorCode = '103';
                } else {
                    errorCode = '104';
                }
            }
        } else {
            errorCode = '201';
        }
        doLog('Initialize : ' + GetErrorString(errorCode));
        return 'false';
    }
    async function Terminate(param) {
        errorCode = '0';
        if (param == '') {
            if ((Initialized) && (!Terminated)) {
                doLog('Terminated Scorm2004');
                Initialized = false;
                Terminated = true;
                let result = await StoreData(cmi, true);
                if (adl.nav.request != '_none') {
                    switch (adl.nav.request) {
                        case 'continue':
                            window.setTimeout('parent.frames.LMSMenu.nextSCO();', 500);
                            break;
                        case 'previous':
                            window.setTimeout('parent.frames.LMSMenu.previousSCO();', 500);
                            break;
                        case 'choice':
                            break;
                        case 'exit':
                            window.setTimeout('parent.frames.LMSMenu.terminateSCO("exit");', 500);
                            break;
                        case 'exitAll':
                            window.setTimeout('parent.frames.LMSMenu.terminateSCO("exitAll");', 500);
                            break;
                        case 'abandon':
                            break;
                        case 'abandonAll':
                            break;
                    }
                } else {
                    window.setTimeout('parent.document.location=top.prev;', 500);
                }
                return result;
            } else {
                if (Terminated) {
                    errorCode = '113';
                } else {
                    errorCode = '112';
                }
            }
        } else {
            errorCode = '201';
        }
        doLog('Terminate : ' + GetErrorString(errorCode));
        return 'false';
    }
    function GetValue(element) {
        errorCode = '0';
        diagnostic = '';
        if ((Initialized) && (!Terminated)) {
            if (element != '') {
                var expression = new RegExp(CMIIndex, 'g');
                var elementmodel = element.replace(expression, '.n.');
                if ((typeof eval('datamodel["' + elementmodel + '"]')) != 'undefined') {
                    if (eval('datamodel["' + elementmodel + '"].mod') != 'w') {
                        element = String(element).replace(/\.(\d+)\./, '.N$1.');
                        element = element.replace(/\.(\d+)\./, '.N$1.');
                        var elementIndexes = element.split('.');
                        var subelement = element.substr(0, 3);
                        var i = 1;
                        while ((i < elementIndexes.length) && (typeof eval(subelement) != 'undefined')) {
                            subelement += '.' + elementIndexes[i++];
                        }
                        if (subelement == element) {
                            doLog('GetValue(' + element + ')');
                            if ((typeof eval(subelement) != 'undefined') && (eval(subelement) != null)) {
                                errorCode = '0';
                                return eval(element);
                            } else {
                                errorCode = '403';
                            }
                        } else {
                            errorCode = '301';
                        }
                    } else {
                        errorCode = '405';
                    }
                } else {
                    var childrenstr = '._children';
                    var countstr = '._count';
                    var parentmodel = '';
                    if (elementmodel.substr(elementmodel.length - childrenstr.length, elementmodel.length) == childrenstr) {
                        parentmodel = elementmodel.substr(0, elementmodel.length - childrenstr.length);
                        if ((typeof eval('datamodel["' + parentmodel + '"]')) != 'undefined') {
                            errorCode = '301';
                            diagnostic = 'Data Model Element Does Not Have Children';
                        } else {
                            errorCode = '401';
                        }
                    } else if (elementmodel.substr(elementmodel.length - countstr.length, elementmodel.length) == countstr) {
                        parentmodel = elementmodel.substr(0, elementmodel.length - countstr.length);
                        if ((typeof eval('datamodel["' + parentmodel + '"]')) != 'undefined') {
                            errorCode = '301';
                            diagnostic = 'Data Model Element Cannot Have Count';
                        } else {
                            errorCode = '401';
                        }
                    } else {
                        parentmodel = 'adl.nav.request_valid.';
                        if (element.substr(0, parentmodel.length) == parentmodel) {
                            if (element.substr(parentmodel.length).match(NAVTarget) == null) {
                                errorCode = '301';
                            } else {
                                if (element.substr(parentmodel.length) == 'continue')
                                    adl.nav.request = 'continue';
                                if (element.substr(parentmodel.length) == 'previous')
                                    adl.nav.request = 'xxx';
                                if (adl.nav.request == element.substr(parentmodel.length)) {
                                    return 'true';
                                } else if (adl.nav.request == '_none_') {
                                    return 'unknown';
                                } else {
                                    return 'false';
                                }
                            }
                        } else {
                            errorCode = '401';
                        }
                    }
                }
            } else {
                errorCode = '301';
            }
        } else {
            if (Terminated) {
                errorCode = '123';
            } else {
                errorCode = '122';
            }
        }
        doLog('GetValue(' + element + ') -> ' + GetErrorString(errorCode));
        return '';
    }
    function SetValue(element, value) {
        if (element == 'cmi.completion_status' && value == 'passed') {
            value = 'completed';
        } else if (element == 'cmi.completion_status' && value == 'failed') {
            value = 'incomplete';
        };
        errorCode = '0';
        diagnostic = '';
        if ((Initialized) && (!Terminated)) {
            if (element != '') {
                var expression = new RegExp(CMIIndex, 'g');
                var elementmodel = element.replace(expression, '.n.');
                if ((typeof eval('datamodel["' + elementmodel + '"]')) != 'undefined') {
                    if (eval('datamodel["' + elementmodel + '"].mod') != 'r') {
                        if (eval('datamodel["' + elementmodel + '"].format') != 'CMIFeedback') {
                            expression = new RegExp(eval('datamodel["' + elementmodel + '"].format'));
                        } else {
                            expression = new RegExp(CMIFeedback);
                        }
                        value = value + '';
                        var matches = value.match(expression);
                        if ((matches != null) && ((matches.join('').length > 0) || (value.length == 0))) {
                            if (element != elementmodel) {
                                var elementIndexes = element.split('.');
                                var subelement = 'cmi';
                                var parentelement = 'cmi';
                                for (i = 1; (i < elementIndexes.length - 1) && (errorCode == 0); i++) {
                                    var elementIndex = elementIndexes[i];
                                    if (elementIndexes[i + 1].match(/^\d+$/)) {
                                        if ((parseInt(elementIndexes[i + 1]) > 0) && (elementIndexes[i + 1].charAt(0) == 0)) {
                                            errorCode = '351';
                                        }
                                        parentelement = subelement + '.' + elementIndex;
                                        if ((typeof eval(parentelement) == 'undefined') || (typeof eval(parentelement + '._count') == 'undefined')) {
                                            errorCode = '408';
                                        } else {
                                            if (elementIndexes[i + 1] > eval(parentelement + '._count')) {
                                                errorCode = '351';
                                                diagnostic = 'Data Model Element Collection Set Out Of Order';
                                            }
                                            subelement = subelement.concat('.' + elementIndex + '.N' + elementIndexes[i + 1]);
                                            i++;
                                            if (((typeof eval(subelement)) == 'undefined') && (i < elementIndexes.length - 2)) {
                                                errorCode = '408';
                                            }
                                        }
                                    } else {
                                        subelement = subelement.concat('.' + elementIndex);
                                    }
                                }
                                if (errorCode == '0') {
                                    element = subelement.concat('.' + elementIndexes[elementIndexes.length - 1]);
                                    if ((typeof eval(subelement)) == 'undefined') {
                                        switch (elementmodel) {
                                            case 'cmi.objectives.n.id':
                                                if (!duplicatedID(element, parentelement, value)) {
                                                    if (elementIndexes[elementIndexes.length - 2] == eval(parentelement + '._count')) {
                                                        eval(parentelement + '._count++;');
                                                        eval(subelement + ' = new Object();');
                                                        var subobject = eval(subelement);
                                                        subobject.success_status = datamodel['cmi.objectives.n.success_status'].defaultvalue;
                                                        subobject.completion_status = datamodel['cmi.objectives.n.completion_status'].defaultvalue;
                                                        subobject.progress_measure = datamodel['cmi.objectives.n.progress_measure'].defaultvalue;
                                                        subobject.score = new Object();
                                                        subobject.score._children = score_children;
                                                        subobject.score.scaled = datamodel['cmi.objectives.n.score.scaled'].defaultvalue;
                                                        subobject.score.raw = datamodel['cmi.objectives.n.score.raw'].defaultvalue;
                                                        subobject.score.min = datamodel['cmi.objectives.n.score.min'].defaultvalue;
                                                        subobject.score.max = datamodel['cmi.objectives.n.score.max'].defaultvalue;
                                                    }
                                                } else {
                                                    errorCode = '351';
                                                    diagnostic = 'Data Model Element ID Already Exists';
                                                }
                                                break;
                                            case 'cmi.interactions.n.id':
                                                if (elementIndexes[elementIndexes.length - 2] == eval(parentelement + '._count')) {
                                                    eval(parentelement + '._count++;');
                                                    eval(subelement + ' = new Object();');
                                                    var subobject = eval(subelement);
                                                    subobject.objectives = new Object();
                                                    subobject.objectives._count = 0;
                                                }
                                                break;
                                            case 'cmi.interactions.n.objectives.n.id':
                                                if (typeof eval(parentelement) != 'undefined') {
                                                    if (!duplicatedID(element, parentelement, value)) {
                                                        if (elementIndexes[elementIndexes.length - 2] == eval(parentelement + '._count')) {
                                                            eval(parentelement + '._count++;');
                                                            eval(subelement + ' = new Object();');
                                                        }
                                                    } else {
                                                        errorCode = '351';
                                                        diagnostic = 'Data Model Element ID Already Exists';
                                                    }
                                                } else {
                                                    errorCode = '408';
                                                }
                                                break;
                                            case 'cmi.interactions.n.correct_responses.n.pattern':
                                                if (typeof eval(parentelement) != 'undefined') {
                                                    if (elementIndexes[elementIndexes.length - 2] == eval(parentelement + '._count')) {
                                                        var interactiontype = eval(String(parentelement).replace('correct_responses', 'type'));
                                                        var interactioncount = eval(parentelement + '._count');

                                                        if (interactiontype == 'choice') {
                                                            for (var i = 0; (i < interactioncount) && (errorCode == '0'); i++) {
                                                                if (eval(parentelement + '.N' + i + '.pattern') == value) {
                                                                    errorCode = '351';
                                                                }
                                                            }
                                                        }

                                                        if ((typeof correct_responses[interactiontype].limit == 'undefined') || (eval(parentelement + '._count') < correct_responses[interactiontype].limit)) {
                                                            var nodes = new Array();
                                                            if (correct_responses[interactiontype].delimiter != '') {
                                                                nodes = value.split(correct_responses[interactiontype].delimiter);
                                                            } else {
                                                                nodes[0] = value;
                                                            }
                                                            if ((errorCode == '0') && ((correct_responses[interactiontype].duplicate == false) || (!duplicatedPA(element, parentelement, value))) || (errorCode == '0' && value == '')) {
                                                                eval(parentelement + '._count++;');
                                                                eval(subelement + ' = new Object();');
                                                            } else {
                                                                errorCode = '351';
                                                                diagnostic = 'Data Model Element Pattern Already Exists';
                                                            }
                                                        } else {
                                                            errorCode = '351';
                                                            diagnostic = 'Data Model Element Collection Limit Reached';
                                                        }
                                                    } else {
                                                        errorCode = '351';
                                                        diagnostic = 'Data Model Element Collection Set Out Of Order';
                                                    }
                                                } else {
                                                    errorCode = '408';
                                                }
                                                break;
                                            default:
                                                if ((parentelement != 'cmi.objectives') && (parentelement != 'cmi.interactions') && (typeof eval(parentelement) != 'undefined')) {
                                                    if (elementIndexes[elementIndexes.length - 2] == eval(parentelement + '._count')) {
                                                        eval(parentelement + '._count++;');
                                                        eval(subelement + ' = new Object();');
                                                    } else {
                                                        errorCode = '351';
                                                        diagnostic = 'Data Model Element Collection Set Out Of Order';
                                                    }
                                                } else {
                                                    errorCode = '408';
                                                }
                                                break;
                                        }
                                    } else {
                                        switch (elementmodel) {
                                            case 'cmi.objectives.n.id':
                                                if (eval(element) != value) {
                                                    errorCode = '351';
                                                    diagnostic = 'Write Once Violation';
                                                }
                                                break;
                                            case 'cmi.interactions.n.objectives.n.id':
                                                if (duplicatedID(element, parentelement, value)) {
                                                    errorCode = '351';
                                                    diagnostic = 'Data Model Element ID Already Exists';
                                                }
                                                break;
                                            case 'cmi.interactions.n.type':
                                                var subobject = eval(subelement);
                                                subobject.correct_responses = new Object();
                                                subobject.correct_responses._count = 0;
                                                break;
                                            case 'cmi.interactions.n.learner_response':
                                                if (typeof eval(subelement + '.type') == 'undefined') {
                                                    errorCode = '408';
                                                } else {
                                                    interactiontype = eval(subelement + '.type');
                                                    var nodes = new Array();
                                                    if (learner_response[interactiontype].delimiter != '') {
                                                        nodes = value.split(learner_response[interactiontype].delimiter);
                                                    } else {
                                                        nodes[0] = value;
                                                    }
                                                    if ((nodes.length > 0) && (nodes.length <= learner_response[interactiontype].max)) {
                                                        expression = new RegExp(learner_response[interactiontype].format);
                                                        for (var i = 0; (i < nodes.length) && (errorCode == '0'); i++) {
                                                            if (typeof learner_response[interactiontype].delimiter2 != 'undefined') {
                                                                values = nodes[i].split(learner_response[interactiontype].delimiter2);
                                                                if (values.length == 2) {
                                                                    matches = values[0].match(expression);
                                                                    if (matches == null) {
                                                                        errorCode = '406';
                                                                    } else {
                                                                        var expression2 = new RegExp(learner_response[interactiontype].format2);
                                                                        matches = values[1].match(expression2);
                                                                        if (matches == null) {
                                                                            errorCode = '406';
                                                                        }
                                                                    }
                                                                } else {
                                                                    errorCode = '406';
                                                                }
                                                            } else {
                                                                matches = nodes[i].match(expression);
                                                                if (matches == null) {
                                                                    errorCode = '406';
                                                                } else {
                                                                    if ((nodes[i] != '') && (learner_response[interactiontype].unique)) {
                                                                        for (var j = 0; (j < i) && (errorCode == '0'); j++) {
                                                                            if (nodes[i] == nodes[j]) {
                                                                                errorCode = '406';
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    } else if (nodes.length > learner_response[interactiontype].max) {
                                                        errorCode = '351';
                                                        diagnostic = 'Data Model Element Pattern Too Long';
                                                    }
                                                }
                                                break;
                                            case 'cmi.interactions.n.correct_responses.n.pattern':
                                                subel = subelement.split('.');
                                                subel1 = 'cmi.interactions.' + subel[2];
                                                if (typeof eval(subel1 + '.type') == 'undefined') {
                                                    errorCode = '408';
                                                } else {
                                                    var interactiontype = eval(subel1 + '.type');
                                                    var interactioncount = eval(parentelement + '._count');
                                                    if (interactiontype == 'choice') {
                                                        for (var i = 0; (i < interactioncount) && (errorCode == '0'); i++) {
                                                            if (eval(parentelement + '.N' + i + '.pattern') == value) {
                                                                errorCode = '351';
                                                            }
                                                        }
                                                    }
                                                    var nodes = new Array();
                                                    if (correct_responses[interactiontype].delimiter != '') {
                                                        nodes = value.split(correct_responses[interactiontype].delimiter);
                                                    } else {
                                                        nodes[0] = value;
                                                    }
                                                    if (nodes.length > correct_responses[interactiontype].max) {
                                                        errorCode = '351';
                                                        diagnostic = 'Data Model Element Pattern Too Long';
                                                    }
                                                }
                                                break;
                                        }
                                    }
                                }
                            }
                            if (errorCode == '0') {
                                if ((typeof eval('datamodel["' + elementmodel + '"].range')) != 'undefined') {
                                    range = eval('datamodel["' + elementmodel + '"].range');
                                    ranges = range.split('#');
                                    value = value * 1.0;
                                    if (value >= ranges[0]) {
                                        if ((ranges[1] == '*') || (value <= ranges[1])) {
                                            eval(element + '=value;');
                                            doLog('SetValue(' + element + ',' + value + ') -> OK ');
                                            errorCode = '0';
                                            return 'true';
                                        } else {
                                            errorCode = '407';
                                        }
                                    } else {
                                        errorCode = '407';
                                    }
                                } else {
                                    eval(element + '=value;');
                                    errorCode = '0';
                                    doLog('SetValue(' + element + ',' + value + ') -> OK ');
                                    return 'true';
                                }
                            }
                        } else {
                            errorCode = '406';
                        }
                    } else {
                        errorCode = '404';
                    }
                } else {
                    errorCode = '401'
                }
            } else {
                errorCode = '351';
            }
        } else {
            if (Terminated) {
                errorCode = '133';
            } else {
                errorCode = '132';
            }
        }
        doLog('SetValue(' + element + ', ' + value + ') -> ' + GetErrorString(errorCode));
        return 'false';
    }
    async function Commit(param) {
        errorCode = '0';
        if (param == '') {
            if ((Initialized) && (!Terminated)) {
                let result = await StoreData(cmi, false);
                doLog('Data Commited');
                return result;
            } else {
                if (Terminated) {
                    errorCode = '143';
                } else {
                    errorCode = '142';
                }
            }
        } else {
            errorCode = '201';
        }
        doLog('Commited: ' + GetErrorString(errorCode));
        return 'false';
    }
    function GetLastError() {
        return errorCode;
    }
    function GetErrorString(param) {
        if (param != '') {
            var errorString = '';
            switch (param) {
                case '0':
                    errorString = 'No error';
                    break;
                case '101':
                    errorString = 'General exception';
                    break;
                case '102':
                    errorString = 'General Inizialization Failure';
                    break;
                case '103':
                    errorString = 'Already Initialized';
                    break;
                case '104':
                    errorString = 'Content Instance Terminated';
                    break;
                case '111':
                    errorString = 'General Termination Failure';
                    break;
                case '112':
                    errorString = 'Termination Before Inizialization';
                    break;
                case '113':
                    errorString = 'Termination After Termination';
                    break;
                case '122':
                    errorString = 'Retrieve Data Before Initialization';
                    break;
                case '123':
                    errorString = 'Retrieve Data After Termination';
                    break;
                case '132':
                    errorString = 'Store Data Before Inizialization';
                    break;
                case '133':
                    errorString = 'Store Data After Termination';
                    break;
                case '142':
                    errorString = 'Commit Before Inizialization';
                    break;
                case '143':
                    errorString = 'Commit After Termination';
                    break;
                case '201':
                    errorString = 'General Argument Error';
                    break;
                case '301':
                    errorString = 'General Get Failure';
                    break;
                case '351':
                    errorString = 'General Set Failure';
                    break;
                case '391':
                    errorString = 'General Commit Failure';
                    break;
                case '401':
                    errorString = 'Undefinited Data Model';
                    break;
                case '402':
                    errorString = 'Unimplemented Data Model Element';
                    break;
                case '403':
                    errorString = 'Data Model Element Value Not Initialized';
                    break;
                case '404':
                    errorString = 'Data Model Element Is Read Only';
                    break;
                case '405':
                    errorString = 'Data Model Element Is Write Only';
                    break;
                case '406':
                    errorString = 'Data Model Element Type Mismatch';
                    break;
                case '407':
                    errorString = 'Data Model Element Value Out Of Range';
                    break;
                case '408':
                    errorString = 'Data Model Dependency Not Established';
                    break;
            }
            return errorString;
        } else {
            return '';
        }
    }
    function GetDiagnostic(param) {
        if (diagnostic != '') {
            return diagnostic;
        }
        return param;
    }
    function CollectData(data, parent) {
        var datastring = '';
        for (property in data) {
            if (typeof data[property] == 'object') {
                datastring += CollectData(data[property], parent + '.' + property);
            } else {
                element = parent + '.' + property;
                expression = new RegExp(CMIIndexStore, 'g');
                elementmodel = element.replace(expression, '.n.');
                if ((typeof eval('datamodel["' + elementmodel + '"]')) != "undefined") {
                    if (eval('datamodel["' + elementmodel + '"].mod') != 'r') {
                        elementstring = '@' + underscore(element) + '=' + escape(data[property]);
                        if ((typeof eval('datamodel["' + elementmodel + '"].defaultvalue')) != "undefined") {
                            if (eval('datamodel["' + elementmodel + '"].defaultvalue') != data[property]) {
                                datastring += elementstring;
                            } else {
                                datastring += elementstring;
                            }
                        } else {
                            datastring += elementstring;
                        }
                    }
                }
            }
        }
        return datastring;
    }
    function TotalTime() {
        total_time = AddTime(cmi.total_time, cmi.session_time);
        return underscore('cmi.total_time') + "=" + escape(total_time);
    }
    function duplicatedID(element, parent, value) {
        var found = false;
        var elements = eval(parent + '._count');
        for (n = 0; (n < elements) && (!found); n++) {
            if ((parent + '.N' + n + '.id' != element) && eval(parent + '.N' + n + '.id') == value) {
                found = true;
            }
        }
        return found;
    }
    function duplicatedPA(element, parent, value) {
        var found = false;
        var elements = eval(parent + '._count');
        for (var n = 0; (n < elements) && (!found); n++) {
            if ((parent + '.N' + n + '.pattern' != element) && (eval(parent + '.N' + n + '.pattern') == value)) {
                found = true;
            }
        }
        return found;
    }

    function AddTime(first, second) {
        var timestring = 'P';
        var matchexpr = /^P((\d+)Y)?((\d+)M)?((\d+)D)?(T((\d+)H)?((\d+)M)?((\d+(\.\d{1,2})?)S)?)?$/;
        var firstarray = first.match(matchexpr);
        var secondarray = second.match(matchexpr);

        if ((firstarray != null) && (secondarray != null)) {
            var firstsecs = 0;
            if (parseFloat(firstarray[13], 10) > 0) { firstsecs = parseFloat(firstarray[13], 10); }
            var secondsecs = 0;
            if (parseFloat(secondarray[13], 10) > 0) { secondsecs = parseFloat(secondarray[13], 10); }
            var secs = firstsecs + secondsecs;  //Seconds
            var change = Math.floor(secs / 60);
            secs = Math.round((secs - (change * 60)) * 100) / 100;
            var firstmins = 0;
            if (parseInt(firstarray[11], 10) > 0) { firstmins = parseInt(firstarray[11], 10); }
            var secondmins = 0;
            if (parseInt(secondarray[11], 10) > 0) { secondmins = parseInt(secondarray[11], 10); }
            var mins = firstmins + secondmins + change;   //Minutes
            change = Math.floor(mins / 60);
            mins = Math.round(mins - (change * 60));
            var firsthours = 0;
            if (parseInt(firstarray[9], 10) > 0) { firsthours = parseInt(firstarray[9], 10); }
            var secondhours = 0;
            if (parseInt(secondarray[9], 10) > 0) { secondhours = parseInt(secondarray[9], 10); }
            var hours = firsthours + secondhours + change; //Hours
            change = Math.floor(hours / 24);
            hours = Math.round(hours - (change * 24));
            var firstdays = 0;
            if (parseInt(firstarray[6], 10) > 0) { firstdays = parseInt(firstarray[6], 10); }
            var seconddays = 0;
            if (parseInt(secondarray[6], 10) > 0) { firstdays = parseInt(secondarray[6], 10); }
            var days = Math.round(firstdays + seconddays + change); // Days
            var firstmonths = 0;
            if (parseInt(firstarray[4], 10) > 0) { firstmonths = parseInt(firstarray[4], 10); }
            var secondmonths = 0;
            if (parseInt(secondarray[4], 10) > 0) { secondmonths = parseInt(secondarray[4], 10); }
            var months = Math.round(firstmonths + secondmonths);
            var firstyears = 0;
            if (parseInt(firstarray[2], 10) > 0) { firstyears = parseInt(firstarray[2], 10); }
            var secondyears = 0;
            if (parseInt(secondarray[2], 10) > 0) { secondyears = parseInt(secondarray[2], 10); }
            var years = Math.round(firstyears + secondyears);
        }
        if (years > 0) {
            timestring += years + 'Y';
        }
        if (months > 0) {
            timestring += months + 'M';
        }
        if (days > 0) {
            timestring += days + 'D';
        }
        if ((hours > 0) || (mins > 0) || (secs > 0)) {
            timestring += 'T';
            if (hours > 0) {
                timestring += hours + 'H';
            }
            if (mins > 0) {
                timestring += mins + 'M';
            }
            if (secs > 0) {
                timestring += secs + 'S';
            }
        }
        return timestring;
    }

    function StoreData(data, storetotaltime) {
        datastring = '';
        if (storetotaltime) {
            if (cmi.mode == 'normal') {
                if (cmi.credit == 'credit') {
                    if ((cmi.completion_threshold != null) && (cmi.progress_measure != null)) {
                        if (cmi.progress_measure >= cmi.completion_threshold) {
                            cmi.completion_status = 'completed';
                        } else {
                            cmi.completion_status = 'incomplete';
                        }
                    }
                    if ((cmi.scaled_passed_score != null) && (cmi.score.scaled != '')) {
                        if (cmi.score.scaled >= cmi.scaled_passed_score) {
                            cmi.success_status = 'passed';
                        } else {
                            cmi.success_status = 'failed';
                        }
                    }
                }
            }
        }
        datastring += CollectData(data, 'cmi');
        datastring += "@" + TotalTime();
        element = 'adl.nav.request';
        navrequest = eval(element) != datamodel[element].defaultvalue ? '&' + underscore(element) + '=' + escape(eval(element)) : '';
        datastring += navrequest;
        if (!storetotaltime) {
            datastring += ',type=commit';
        }
        var myRequest = NewHttpReq();
        datastring += "@interactions=" + eval('cmi.interactions._count');
        let tracking_data = {};
        tracking_data['cmi.completion_status'] = data.completion_status;
        tracking_data['cmi.exit'] = data.exit;
        tracking_data['cmi.location'] = data.location;
        tracking_data['cmi.score.raw'] = data.score.raw;
        tracking_data['cmi.score.max'] = data.score.max;
        tracking_data['cmi.suspend_data'] = data.suspend_data;
        tracking_data['cmi.success_status'] = data.success_status;
        tracking_data['cmi.total_time'] = data.total_time ? data.total_time : data.session_time;
        tracking_data['cmi.learner_id'] = data.learner_id;
        tracking_data['cmi.learner_name'] = data.learner_name;
        tracking_data['cmi.session_time'] = data.session_time;
        tracking_data['cmi.interactions._count'] = '0';
        result = tracking_data;

        // result = DoRequests(myRequest, url, "id=" + scorm + "&userid=" + user + "&scoid=" + sco + "&attempt=" + attempt + "&datakey=" + datastring, token);
        return result;
    }
    function underscore(str) {
        str = str.replace(/.N/g, ".");
        return str.replace(/\./g, "__");
    }

    function doLog(log) {
        console.log(log);
    }

    function NewHttpReq() {
        if (window.XMLHttpRequest) {
            req = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            req = new ActiveXObject("Microsoft.XMLHTTP");
        }
        return req;
    }

    function DoRequests(req, url, param, jwtoken) {

        req.open("POST", url, false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        req.setRequestHeader('Authorization', 'Bearer ' + jwtoken);
        req.send(param);
    }

    this.Initialize = Initialize;
    this.Terminate = Terminate;
    this.GetValue = GetValue;
    this.SetValue = SetValue;
    this.Commit = Commit;
    this.GetLastError = GetLastError;
    this.GetErrorString = GetErrorString;
    this.GetDiagnostic = GetDiagnostic;
    this.version = '1.0';
}
var API_1484_11 = new SCORMapi1_3();