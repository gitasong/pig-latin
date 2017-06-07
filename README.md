# Leap Year
#### A helpful tool in deciding whether a given year is a leap year, 06/07/17
#### By Larry Taylor & Nicole Freed

## Description

This is a simple tool to help decide if a year is a leap year. Through the user input, a year's leap year status will be revealed.

## Running instructions
* Pull https://github.com/ltmoocow14/leapYear.git.
* View index.html, and see javascript and css in corresponding folders.

## Identifying Behaviors (Specifications)
* The program retains non-alphabetical characters as-is, since they do not contain consonants or vowels.
- Example Input: %*##!
Expected Output: %*##!

* For input with intermixed alpha and non-alpha characters other than apostrophes and hyphens, the program returns "undefined".
- Example Input: $jqu#%ery89
- Expected Output: undefined

* The program adds "way" to single-letter words beginning with a vowel.
- Example Input: i
- Expected Output: iway

* The program adds "way" to the end of multi-letter words beginning with a vowel.
- Example Input: apple
- Expected Output: appleway

* For words beginning with one consonant, the program moves the initial consonant to the end, and adds "ay".
- Example Input: parrot
- Expected Output: arrotpay

* For words beginning with multiple consecutive consonants, the program moves all of the initial consecutive consonants to the end, and adds "ay".
- Example Input: shrimp
- Expected Output: impshray

* If the first consonants are "qu", the program moves the "u" to the end following the "q" and adds "ay".
- Example Input: quotidian
- Expected Output: otidianquay

* If the first consonants are "squ", the program moves the "qu" to the end following with the "s" and adds "ay".
- Example Input: squamous
- Expected Output: amousquay

* For words beginning with "y", the program treats "y" as a consonant, moving it to the end and adding "ay".
- Example Input: yikes
- Expected Output: ikesyay

* For multiple words, the program treats each word individually, applying the relevant rule for that word, and returns the translated words in their original sequence.
- Example Input: multiple words
- Expected Output: ultiplemay ordsway

* For contracted words and possessives with apostrophes, the program does not translate the apostrophe(s), and treats the whole as an individual word, applying the relevant rule.
- Example Input: he'll've
- Expected Output: e'll'vehay

* For words starting with an apostrophe followed by a consonant, the program moves the initial apostrophe along with the initial consonants and follows the rules for initial consonants.
- Example Input: 'twas
- Expected Output: as'tway

* For words starting with an apostrophe followed by a vowel, the program retains the initial apostrophe and follows the rules for initial vowels.
- Example Input: 'em
- Expected Output: 'emway

* For hyphenated words, the program does nothing to the hyphen(s), and treats each segment as an individual word, applying the relevant rule.
- Example Input: state-of-the-art
- Expected Output: atestay-ofway-ethay-artway

* For multi-word sentences, the program treats each word individually, applying the relevant rule for that word, and returns the whole translated sentence in its original sequence.
- Example Input: This is a sentence with multiple words.
- Expected Output: Isthay isway away entenceway ithway utliplemay ordsway.

## Known Bugs/Problems

* No known bugs or problems

## Support and contact details

We are always open to new tips, tricks, or ideas to make the page run smoother or look better.

## Technologies used

Incorporates bootstrap.css and jquery.js

## license

Open source. Feel free to pull, copy, edit, etc.
