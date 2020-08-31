(function(){
    let $topLeftInput = returnsElement('#top-left');
    let $topRightInput = returnsElement('#top-right');
    let $bottomLeftInput = returnsElement('#bottom-left');
    let $bottomRightInput = returnsElement('#bottom-right');
    let $borderWidthInput = returnsElement('#border-width');
    let $content = returnsElement('.content-2');
    let $bordersStylesInput = returnsElement('#borders-styles');
    let $colorInput = returnsElement('#border-color');
    let $form = returnsElement('.values');

    $form.addEventListener('change', (e)=>{
        let topLeftValue = $topLeftInput.value;
        let topRightValue = $topRightInput.value;
        let bottomLeftValue = $bottomLeftInput.value;
        let bottomRightValue = $bottomRightInput.value;
        let borderWidthValue = $borderWidthInput.value;
        let borderStyleValue = $bordersStylesInput.value;
        let colorBackground = $colorInput.value;
        document.querySelector('#top-left-value').innerHTML = topLeftValue;
        document.querySelector('#top-right-value').innerHTML = topRightValue;
        document.querySelector('#bottom-left-value').innerHTML = bottomLeftValue;
        document.querySelector('#bottom-right-value').innerHTML = bottomRightValue;

        $content.style.borderTopLeftRadius = topLeftValue+'px';
        $content.style.borderTopRightRadius = topRightValue+'px';
        $content.style.borderBottomLeftRadius = bottomLeftValue+'px';
        $content.style.borderBottomRightRadius = bottomRightValue+'px';
        $content.style.borderBottomRightRadius = bottomRightValue+'px';
        $content.style.borderStyle = borderStyleValue;
        $content.style.borderWidth = borderWidthValue+'px';
        $content.style.backgroundColor = colorBackground;

    });

    function returnsElement(selectorAndName){
        return document.querySelector(selectorAndName);
    }
})();