PHASE SURFER v38 — iPAD FAST TRANSPORT TOUCH

母体: v37 FRONT→BACK STATE PRINT LAB

目的:
iPadで START / NEXT / INTERCHANGE のタップが時々鈍く感じる件を、
音声エンジンや演奏ロジックを変えずに入力層だけで改善する。

変更:
- START / NEXT / INTERCHANGE の3ボタンだけ、touch/penでは clean pointerup を直接演奏入力として使う
- その後にブラウザが生成する compatibility click は抑止して二重発火を防ぐ
- 18pxを超える移動はtap扱いにしないので、スクロール/指ずらしを誤発火しにくい
- mouseは従来どおり click

変更しないもの:
- FRONT→BACK STATE PRINT
- FRONT→EMPTY SLOT STATE CARD
- FRONT/BACK/SLOT double
- NEXTのBPM BRIDGE + effect
- INTERCHANGEの音響内容
- START/STOPの音響内容
- COLLATZ CARD
- WAV P30→FULL 8ms handoff
- forced-head FX reset
- audio-data.js

確認ポイント:
1. iPadで START / NEXT / INTERCHANGE を軽く素早く叩いた時の取りこぼし/遅さ
2. 連打しても二重発火しない
3. Macのmouse操作はv37と同じ
