enum Buttons {
    //% block="SELECT"
    Select,
    //% block="MODE"
    Mode,
    //% block="UP"
    Up,
    //% block="LEFT"
    Left,
    //% block="CENTER"
    Center,
    //% block="RIGHT"
    Right,
    //% block="DOWN"
    Down
}

enum ButtonEvents {
    //% block="PRESSED"
    Pressed = 1,
    //% block="RELEASED"
    Released = 0
}

enum JoystickAxis {
    //% block="X"
    X,
    //% block="Y"
    Y
}

namespace ks0296 {

    //% blockId="readButton" block="Button %buttonID|%buttonEvt"
    export function readButton(buttonID: Buttons, buttonEvt: ButtonEvents): boolean {
        switch (buttonID) {
            case Buttons.Select: return pins.digitalReadPin(DigitalPin.P7) == buttonEvt; break;
            case Buttons.Mode: return pins.digitalReadPin(DigitalPin.P6) == buttonEvt; break;
            case Buttons.Up: return pins.digitalReadPin(DigitalPin.P10) == buttonEvt; break;
            case Buttons.Left: return pins.digitalReadPin(DigitalPin.P11) == buttonEvt; break;
            case Buttons.Center: return pins.digitalReadPin(DigitalPin.P5) == buttonEvt; break;
            case Buttons.Right: return pins.digitalReadPin(DigitalPin.P9) == buttonEvt; break;
            case Buttons.Down: return pins.digitalReadPin(DigitalPin.P8) == buttonEvt; break;
        }
    }

    //% blockId="readJoystick" block="Joystick %JoystickAxis"
    //% weight=85
    export function readJoystick(axisID: JoystickAxis): number {
        switch (axisID) {
            case JoystickAxis.X: return pins.analogReadPin(AnalogPin.P4); break;
            case JoystickAxis.Y: return pins.analogReadPin(AnalogPin.P3); break;
        }
    }
}