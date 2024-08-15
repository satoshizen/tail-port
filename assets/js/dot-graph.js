function resizeDotGraph() {
    // クラスが `da` の要素を全部取得
    const dotGraphs = document.querySelectorAll(".da");
    // `da` の要素を一つずつ処理
    dotGraphs.forEach(element => {
        // それぞれの一番近いクラス名が `progress` を取得
        const progress = element.closest(".progress");
        // その横幅を取得
        const width = progress.offsetWidth;
        
        // それぞれの `da` 要素に横幅を設定
        element.setAttribute("style", "width:" + width + "px;");
    });
}

// ウィンドウのリサイズ時に実行
window.onresize = resizeDotGraph;
// ウィンドウの読み込み時に実行
window.onload = resizeDotGraph;