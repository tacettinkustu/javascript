var noteInput, noteName, textEntered, target;

noteName = document.getElementById('noteName');
noteInput = document.getElementById('noteInput');

function writeLabel(e) {
    if (!e) {
        e = window.event;
    }
    target = e.target || event.srcElement;
    textEntered = target.value;
    noteName.textContent = textEntered;
}

if (document.addEventListener) {
    document.addEventListener('click', function (e) {
        recorderControls(e);
    },false);
    username.addEventListener('input', writeLabel, false);
} else {
    document.attachEvent('onclick', function (e) {
        recorderControls(e);
    });
    username.attachEvent('onkeyup', writeLabel, false);
}

function recorderControls(e) {
    if (!e) {
        e = window.event;
    }
    target = event.target || event.srcElement;
    if (event.preventDefault) {
        e.preventDefault();
    } else {
        event.returnValue = false;
    }
}

switch (target.getAttribute('data-state')) {
    case 'record':
        record(target);
        break;
    case 'stop':
        stop(target);
        break;
    default:
        break;
    }
};

function record(target) {
    target.setAttribute('data-state', 'stop');
    target.textContent = 'stop'
}

function stop(target) {
    target.setAttribute('data-state', 'record');
    target.textContent = 'record';
}