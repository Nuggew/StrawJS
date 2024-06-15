function notify(title, body, icon, tag) {
    if (!("Notification" in window))
        return 'no_support';
    else if (Notification.permission === "granted") {
        const notification = new Notification(title, { body, icon, tag });
        return notification;
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
            if (permission === "granted")
                return notify(title, body, icon, tag);
            else
                return permission;
        });
    }
}

function askNotifyPermission(){
    if (!("Notification" in window))
        return 'no_support';
    else{
        Notification.requestPermission().then((permission) => {
            return permission;
        });
    }
}

module.exports = {askNotifyPermission,notify};
