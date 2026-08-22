PHASE SURFER v33 — FORCED HEAD FX RESET FIX

v32 COLLATZ CARD LAB を母体にした、音声挙動だけの小さな修正版です。

修正した不具合
- INTERCHANGEを連打した直後など、INTERCHANGEのwet delayが高い途中で
  SLOT double / FRONT double / BACK double の「強制HEAD」を行うと、
  INTERCHANGEの後続EXIT CUTタイマーまでキャンセルされる一方、delay wetだけが
  保持され、次の素材にディレイがかかり続けることがありました。

v33の修正
- 強制HEAD専用のFXクリアを追加。
- 強制HEAD時はINTERCHANGE等のeffect timerを停止し、delay wet/feedbackを
  数十msで静かに閉じます。
- BPM/HEADの既存仕様は変更しません。
  * FRONT double: FRONTのままHEAD、現在BPM維持
  * BACK double: FRONTへ、HEAD、可能ならPLAY BPM維持
  * SLOT double: FRONTへ、HEAD、1.000x / SOURCE BPM
- COLLATZ CARD、WAV P30→FULL 8ms handoff、SLOT/BACK D&D、色family仕様はv32のまま。

狙い
「強制HEAD」は演奏者が明示的に新しい頭を出す境界なので、途中のINTERCHANGEの
wet stateを次の素材へ持ち越さない。一方、通常のNEXT/STOPの意図的なdelay tailは
従来どおり残します。
