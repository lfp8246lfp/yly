export function AP (ak = '5d0c10b13cc908bc1c00f012ec739e9d') {
    return new Promise(function (resolve, reject) {
        window.onload = function () {
            resolve(AMap);
        };
        if (typeof AMap === 'undefined') {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://webapi.amap.com/maps?v=1.4.13&key=' + ak + '&plugin=AMap.CitySearch';
            script.onerror = reject;
            document.head.appendChild(script);
        } else {
            resolve(AMap);
        }
    });
}
