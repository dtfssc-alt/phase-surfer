PHASE SURFER v42 — NEXT POSITION BRIDGE LAB

v41のカード配色・操作・音声エンジンを維持したまま、NEXTだけに相対再生位置の継承を追加した実験版です。

NEXT:
- 現在のPLAY BPMを継承（従来通り）
- 現在のFRONT再生位置を0〜100%の割合でBACKへ継承
- 到着時は従来通りSURPRISE effect
- WAV P30内に目的位置があれば即座に移動
- 目的位置がP30より先なら、現在のFRONTを鳴らしたまま決定論的SEEK WAIT effectで時間を稼ぎ、full decode後に正しい位置へ移動

FRONT/BACK/SLOTのダブルタップは従来通り HOME + HEAD。NEXTだけが「現在の運動と位置を向こうの柱へ渡す」操作です。
