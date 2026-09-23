#!/usr/bin/env python3
"""
Complete unabridged English translation of Gabriel Marcel's
"Positions et approches concrètes du mystère ontologique" (125 paragraphs, ~12,400 words)
Matching Manya Harari's classical translation ("On the Ontological Mystery").
"""

from sec1_en import get_sec1
from sec2_en import get_sec2
from sec3_en import get_sec3
from sec4_en import get_sec4
from sec5_en import get_sec5

def get_english_translations():
    all_en = get_sec1() + get_sec2() + get_sec3() + get_sec4() + get_sec5()
    assert len(all_en) == 125, f"Expected 125 English paragraphs, got {len(all_en)}"
    return all_en

if __name__ == '__main__':
    en = get_english_translations()
    print(f"Total English paragraphs: {len(en)}")
    print(f"Total English words: {sum(len(p.split()) for p in en)}")
