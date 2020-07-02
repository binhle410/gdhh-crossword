// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function ($) {
    $(function () {
        // provide crossword entries in an array of objects like the following example
        // Position refers to the numerical order of an entry. Each position can have
        // two entries: an across entry and a down entry
        var puzzleData = [
            {
                clue: "",
                answer: "ABRAHAM",
                position: 1,
                orientation: "across",
                startx: 6,
                starty: 1
            },
            {
                clue: "",
                answer: "GHENNEXARET",
                position: 2,
                orientation: "across",
                startx: 5,
                starty: 2
            },
            {
                clue: "",
                answer: "MATTHIA",
                position: 3,
                orientation: "across",
                startx: 5,
                starty: 3
            },
            {
                clue: "",
                answer: "HERODE",
                position: 4,
                orientation: "across",
                startx: 9,
                starty: 4
            },
            {
                clue: '',
                answer: "GIOAN",
                position: 5,
                orientation: "across",
                startx: 6,
                starty: 5
            },
            {
                clue: '',
                answer: "ĐIĐYMO",
                position: 6,
                orientation: "across",
                startx: 6,
                starty: 6
            },
            {
                clue: "",
                answer: "GIOANTAYGIA",
                position: 7,
                orientation: "across",
                startx: 4,
                starty: 7
            },
            {
                clue: '',
                answer: "MATTHEU",
                position: 8,
                orientation: "across",
                startx: 5,
                starty: 8
            },
            {
                clue: '',
                answer: "ELISABET",
                position: 9,
                orientation: "across",
                startx: 3,
                starty: 9
            },
            {
                clue: '',
                answer: "GIACOBE",
                position: 10,
                orientation: "across",
                startx: 5,
                starty: 10
            },
            {
                clue: '',
                answer: "NATHANAEN",
                position: 11,
                orientation: "across",
                startx: 7,
                starty: 11
            },
            {
                clue: '',
                answer: "PHAOLO",
                position: 12,
                orientation: "across",
                startx: 6,
                starty: 12
            },
            {
                clue: '',
                answer: "PHILIPPHE",
                position: 13,
                orientation: "across",
                startx: 5,
                starty: 13
            },
            {
            	clue: "",
            	answer: "CỞIQUAIDÉP",
            	position: 1,
            	orientation: "down",
            	startx: 6,
            	starty: 1
            },
            // {
            // 	clue: "Control system strategy that tries to replicate the human through process (abbr.)",
            // 	answer: "ann",
            // 	position: 4,
            // 	orientation: "down",
            // 	startx: 9,
            // 	starty: 1
            // },
            // {
            // 	clue: "Greek variable that usually describes rotor positon",
            // 	answer: "theta",
            // 	position: 6,
            // 	orientation: "down",
            // 	startx: 7,
            // 	starty: 3
            // },
            // {
            // 	clue: "Electromagnetic (abbr.)",
            // 	answer: "em",
            // 	position: 7,
            // 	orientation: "down",
            // 	startx: 11,
            // 	starty: 3
            // },
            // {
            // 	clue: "No. 13 across does this to a voltage",
            // 	answer: "steps",
            // 	position: 9,
            // 	orientation: "down",
            // 	startx: 5,
            // 	starty: 5
            // },
            // {
            // 	clue: "Emits a lout wailing sound",
            // 	answer: "siren",
            // 	position: 11,
            // 	orientation: "down",
            // 	startx: 11,
            // 	starty: 7
            // },
            // {
            // 	clue: "Information technology (abbr.)",
            // 	answer: "it",
            // 	position: 12,
            // 	orientation: "down",
            // 	startx: 1,
            // 	starty: 8
            // },
            // {
            // 	clue: "Asynchronous transfer mode (abbr.)",
            // 	answer: "atm",
            // 	position: 14,
            // 	orientation: "down",
            // 	startx: 3,
            // 	starty: 9
            // },
            // {
            // 	clue: "Offset current control (abbr.)",
            // 	answer: "occ",
            // 	position: 15,
            // 	orientation: "down",
            // 	startx: 7,
            // 	starty: 9
            // }
        ]

        $('#puzzle-wrapper').crossword(puzzleData);

    })

})(jQuery)
