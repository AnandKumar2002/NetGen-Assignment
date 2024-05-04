export default function serviceworker() {
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`;

    navigator.serviceWorker.register(swUrl)
        .then((response) => {
            console.log("response done:-", response)
        })



    // ****** If this is work means your browser sport that feature then use jo mana yuper likha ha ******//
    //     if ('serviceWorker' in navigator) {
    //         window.addEventListener('load', function() {
    //             navigator.serviceWorker.register(swUrl).then(function(registration) {
    //                 console.log('Worker registration successful, scope is:', registration.scope);
    //             }, function(err) {
    //                 console.log('Service worker registration failed, error:', err);
    //             })
    //             .catch(function(err) {
    //                 console.log('Service worker registration failed, error:', err);
    //             });
    //         });
    //     } else {
    //         console.log('Service worker is not supported');
    //     }
    

}
