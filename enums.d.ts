/**
 * LEDピン設定用
 */
// TrinketM0で使用可能なLEDピンを定義
declare const enum outputLed {
    //% block="D0"
    D0 = 0,
    //% block="D1"
    D1 = 1,
    //% block="D2"
    D2 = 2,
    //% block="D3"
    D3 = 3,
    //% block="D4"
    D4 = 4
}



/**
 * タッチピン設定用
 */
// TrinketM0で使用可能なタッチピンを定義
declare const enum inputTouch {
    //% block="D1"
    D1 = 0,
    //% block="D3"
    D3 = 1,
    //% block="D4"
    D4 = 2
}



/**
 * 繰り返し時間の設定＠流れるグラデーション
 */
declare const enum timeList {
    //% block="なし"
    NON = 0,
    //% block="100ms"
    T100 = 16,
    //% block="500ms"
    T500 = 79,
    //% block="5s"
    T5 = 790
}