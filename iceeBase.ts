//% weight=900 color=#12B500 icon="\uf110"
//% block="基本ブロック"
//% groups=['ループ', '論理']
namespace iceeBase {

    /**
     * 最初だけブロック
     */
    //% block="最初だけ"
    //% group="ループ"
    //% weight=990
    export function iceeOnStart(a: () => void): void {
        a();
    }


    /**
     * ずっとブロック
     */
    //% afterOnStart=true
    //% block="ずっと"
    //% group="ループ"
    //% weight=980
    export function iceeForever(a: () => void): void {
        forever(function () {
            a();
        })
    }


    /**
     * 一時停止ブロック
     */
    //% shim=TD_ID
    //% blockId=timePicker
    //% block="$value"
    //% blockHidden=true
    //% value.fieldEditor="numberdropdown"
    //% value.fieldOptions.decompileLiterals=true
    //% value.fieldOptions.data='[["100 ミリ秒", 100], ["200 ミリ秒", 200], ["500 ミリ秒", 500], ["1 秒", 1000], ["2 秒", 2000], ["5 秒", 5000]]'
    //% value.defl='100'
    export function __timePicker(value: number): number {
        return value;
    }

    //% block="一時停止 $value ms"
    //% value.shadow="timePicker"
    //% group="ループ"
    //% weight=970
    export function iceePause(value: number) {
        pause(value);
    }



    /**
     * 繰り返しブロック
     */
    //% block="変数 $index を 0 から $times まで繰り返す"
    //% index.defl='カウンター'
    //% index.shadow=variables_get
    //% times.defl=4
    //% handlerStatement
    //% draggableParameters
    //% group="ループ"
    //% weight=960
    export function iceeLoop(times: number, handler: (index: number) => void): void {
        for (let index = 0; index <= times; index++) {
            handler(index);
        }
    }



    /**
     * 条件分岐ブロック
     */
    //% block="もし $condition なら"
    //% condition.defl=true
    //% handlerStatement
    //% group="論理"
    //% weight=880
    function iceeIf(condition: boolean, handler: () => void): void {
        if (condition) {
            handler();
        }
    }



    /**
     * 条件分岐ブロック
     */
    //% block="もし $condition なら $handler1 でなければ $handler2"
    //% condition.defl=true
    //% handlerStatement
    //% group="論理"
    //% weight=890
    function iceeIfElse(condition: boolean, handler1: () => void, handler2: () => void): void {
        if (condition) {
            handler1();
        } else {
            handler2();
        }
    }

}