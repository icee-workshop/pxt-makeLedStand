//% weight=999 color=#E2B500 icon="\uf110"
//% block="鳥大ものづくり教室"
//% groups=['LEDの制御', 'はじめに']
namespace iceeWorkshop {

    /**
     * =================================================
     * LEDテープの長さ（LEDの数）
     * =================================================
     */
    // フルカラーLEDテープのLED数（デフォルト：6個）を定義
    const _pixelLenght = 6;

    /**
     * LEDテープに付いているLEDの数を取得する
     */
    //% block="LEDの数"
    //% group="LEDの制御"
    //% advanced=true
    export function pixelLenght(): number {
        return _pixelLenght;
    }



    /**
     * =================================================
     * LEDテープの制御用インスタンス
     * =================================================
     */
    // フルカラーLEDテープの制御オブジェクト（デフォルト制御ピン：D1）
    let _iceeStrip = light.createStrip(pins.D1, _pixelLenght);

    /**
     * LEDテープの制御オブジェクトです．
     */
    //% block="ICEE strip"
    //% group="LEDの制御"
    //% advanced=true
    export function iceeStrip(): light.NeoPixelStrip {
        return _iceeStrip;
    }



    /**
     * =================================================
     * モード切替機能
     * =================================================
     */
    let _swichMode = 1

    // ボードボタンのピン設定ごとに割り込みを設定
    function _createMode(pin: inputTouch, a: () => void): void {
        switch (pin) {
            case inputTouch.D1:
                input.touchD1.onEvent(ButtonEvent.Click, a);
                break;
            case inputTouch.D3:
                input.touchD3.onEvent(ButtonEvent.Click, a);
                break;
            case inputTouch.D4:
                input.touchD4.onEvent(ButtonEvent.Click, a);
                break;
        }
    }

    /**
     * LEDスタンドのモード数やスイッチが繋がるピン，LEDが繋がるピンを設定します．
     */
    //% block="LEDスタンドの設定 | モード数 %num || スイッチのピン %pinMode LEDのピン %pinLed"
    //% num.min=1 num.max=9 num.defl=3
    //% pinMode.defl=inputTouch.D3
    //% pinLed.defl=outputLed.D1
    //% group="はじめに"
    //% weight=900
    export function initialization(num: number, pinMode: inputTouch = inputTouch.D3, pinLed: outputLed = outputLed.D1): void {
        const iopinLed = (pinLed == outputLed.D0) ? pins.D0 :
            (pinLed == outputLed.D1) ? pins.D1 :
                (pinLed == outputLed.D2) ? pins.D2 :
                    (pinLed == outputLed.D3) ? pins.D3 :
                        (pinLed == outputLed.D4) ? pins.D4 : pins.D1;
        _iceeStrip = light.createStrip(iopinLed, _pixelLenght);
        _iceeStrip.setBrightness(200);

        _createMode(pinMode, function () {
            if (_swichMode == num) {
                _swichMode = 1;
            } else {
                _swichMode += 1;
            }
            iceeWorkshop.clear();
        })
    }

    /**
     * 指定したモードのときの動作を作ります．
     */
    //% afterOnStart=true
    //% block="モード %num のときずっと"
    //% num.min=1 num.max=9 num.defl=1
    //% group="はじめに"
    //% weight=800
    export function loopMode(num: number, a: () => void): void {
        forever(function () {
            if (_swichMode == num) {
                a();
            }
        })
    }



    /**
     * =================================================
     * LEDの制御
     * =================================================
     */
    /**
     * 光の強さを0から255の間で変えることができます．
     */
    //% block="光の強さを設定 %brightness"
    //% group="LEDの制御"
    //% brightness.min=0 brightness.max=255
    //% advanced=true
    export function setBrightness(brightness: number): void {
        _iceeStrip.setBrightness(brightness);
    }

    /**
     * LEDテープのすべてのLEDを指定した色に変えます．
     */
    //% block="すべての色を変える %rgb=colorNumberPicker"
    //% group="LEDの制御"
    //% weight=700
    export function setAll(rgb: number): void {
        _iceeStrip.setAll(rgb);
    }

    //% block="光る %pixeloffset 番目のLEDを %rgb=colorNumberPicker に光る"
    //% group="LEDの制御"
    //% weight=600
    export function setPixelColor(pixeloffset: number, color: number): void {
        _iceeStrip.setPixelColor(pixeloffset, color)
    }

    //% block="グラデーション %startRgb=colorNumberPicker から %endRgb=colorNumberPicker へ"
    //% startRgb.defl=0 endRgb.defl=9
    //% group="LEDの制御"
    //% weight=500
    export function setGradient(startRgb: number, endRgb: number): void {
        _iceeStrip.setGradient(startRgb, endRgb)
    }

    //% block="光を消す"
    //% group="LEDの制御"
    //% weight=300
    export function clear(): void {
        _iceeStrip.clear()
    }





    /**
     * LEDの制御：流れるグラデーション
     */
    let _sweepCount = 0;

    //% block="流れるグラデーション 速さ %speed 時間 %times"
    //% speed.min=1 speed.max=10 speed.defl=1
    //% times.defl=timeList.NON
    //% group="LEDの制御"
    //% weight=400
    export function setSweepGradient(speed: number, times: timeList): void {
        let red = 0;
        let green = 0;
        let blue = 0;

        for (let loopCount = 0; loopCount <= times; loopCount++) {
            if (_sweepCount <= 255) {
                red = 255 - _sweepCount;
                green = _sweepCount;
                blue = 0;
            } else if (_sweepCount <= 510) {
                red = 0;
                green = 510 - _sweepCount;
                blue = _sweepCount - 255;
            } else {
                red = _sweepCount - 510;
                green = 0;
                blue = 765 - _sweepCount;
            }
            _iceeStrip.setGradient(light.rgb(red, green, blue), light.rgb(blue, red, green));

            if (_sweepCount + speed <= 765) {
                _sweepCount = _sweepCount + speed;
            } else {
                _sweepCount = 0;
            }
        }
    }
}