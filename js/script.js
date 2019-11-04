// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function ($) {
    $(function () {
        // provide crossword entries in an array of objects like the following example
        // Position refers to the numerical order of an entry. Each position can have
        // two entries: an across entry and a down entry
        var puzzleData = [
            {
                clue: "Sau 3 ngày tìm kiếm, Đức Maria và Thánh Giuse đã tìm thấy cậu bé Giêsu ở đâu?",
                answer: "ĐỀNTHỜ",
                position: 1,
                orientation: "across",
                startx: 7,
                starty: 1
            },
            {
                clue: "Ngoài quyền cai quản và giảng dạy, Chúa Giêsu còn ban quyền này cho thánh Phêrô và các Tông Đồ. Em hãy cho biết quyền này là gì?",
                answer: "THATHỨ",
                position: 2,
                orientation: "across",
                startx: 2,
                starty: 2
            },
            {
                clue: "Trong đêm Thiên Chúa cứu dân Israel thoát khỏi Ai Cập, Ngài bảo dân hãy giết con gì để lấy máu bôi lên khung cửa?",
                answer: "CONCHIÊN",
                position: 3,
                orientation: "across",
                startx: 4,
                starty: 3
            },
            {
                clue: "Làng Na-da-rét thuộc miền nào của nước Do Thái?",
                answer: "GALILÊ",
                position: 4,
                orientation: "across",
                startx: 7,
                starty: 4
            },
            {
                clue: 'Cả gia đình cùng lên đền thờ Giêrusalem để mừng lễ Vượt Qua, khi Đức Giêsu được bao nhiêu tuổi?',
                answer: "MƯỜIHAI",
                position: 5,
                orientation: "across",
                startx: 1,
                starty: 5
            },
            {
                clue: 'Người có bà mẹ vợ được Chúa Giêsu chữa cho khỏi bệnh sốt. Người đó là ai?',
                answer: "PHÊRÔ",
                position: 6,
                orientation: "across",
                startx: 5,
                starty: 6
            },
            {
                clue: "Trước khi tuyển chọn 12 Tông Đồ, Chúa Giêsu đã cầu nguyện bao lâu?",
                answer: "SUỐTĐÊM",
                position: 7,
                orientation: "across",
                startx: 7,
                starty: 7
            },
            {
                clue: 'Làng Bêlem thuộc miền nào của nước Do Thái?',
                answer: "GIUĐÊ",
                position: 8,
                orientation: "across",
                startx: 5,
                starty: 8
            },
            {
                clue: 'Chúa Giêsu đến sông Gio-đan chịu phép rửa của ông Gioan để bắt đầu cuộc sống nào?',
                answer: "CÔNGKHAI",
                position: 9,
                orientation: "across",
                startx: 3,
                starty: 9
            },
            {
                clue: 'Ông là bạn của Nathanaen, cùng quê ở Bết-xai-đa với Anrê và Phêrô. Ông là ai?',
                answer: "PHILIPPHÊ",
                position: 10,
                orientation: "across",
                startx: 3,
                starty: 10
            },
            {
                clue: 'Thánh Giuse làm nghề gì?',
                answer: "THỢMỘC",
                position: 11,
                orientation: "across",
                startx: 7,
                starty: 11
            },
            {
                clue: 'Vị Tông Đồ nào có mặt cùng với Phêrô và Gioan lúc Chúa Giêsu biến hình trên núi?',
                answer: "GIACÔBÊ",
                position: 12,
                orientation: "across",
                startx: 3,
                starty: 12
            },
            {
                clue: 'Đối với những dạy bảo của cha mẹ, Đức Giêsu luôn có thái độ nào?',
                answer: "VÂNGLỜI",
                position: 13,
                orientation: "across",
                startx: 7,
                starty: 13
            },
            {
                clue: '“Cuộc sống của Đức Giêsu tại Na-da-rét dạy ta phải sống thế nào với cha mẹ?',
                answer: "HIẾUTHẢO",
                position: 14,
                orientation: "across",
                startx: 4,
                starty: 14
            },
            {
                clue: 'Tên của vị Tông Đồ đã đứng dưới chân thập giá cùng với Đức Giêsu?',
                answer: "GIOAN",
                position: 15,
                orientation: "across",
                startx: 4,
                starty: 15
            },
			{
				clue: 'Chúa Giêsu thường cầu nguyện một mình ở nơi như thế nào?',
				answer: "THANHVẮNG",
				position: 16,
				orientation: "across",
				startx: 2,
				starty: 16
			},
			{
				clue: 'Điền từ vào chỗ trống để hoàn thành đoạn hát điệp khúc sau',
				answer: "ANHDŨNG",
				position: 17,
				orientation: "across",
				startx: 3,
				starty: 17
			},
			{
				clue: 'Ai là người đòi xỏ ngón tay vào lỗ đinh và đặt bàn tay vào cạnh sườn Chúa Giêsu mới chịu tin là Ngài đã sống lại?',
				answer: "TÔMA",
				position: 18,
				orientation: "across",
				startx: 7,
				starty: 18
			},
			{
				clue: 'Sau khi sống lại và hiện ra an ủi, dạy dỗ các môn đệ trong 40 ngày, Chúa Giêsu đi đâu?',
				answer: "LÊNTRỜI",
				position: 19,
				orientation: "across",
				startx: 3,
				starty: 19
			},
			{
				clue: 'Hãy chọn đáp án đúng để hoàn thành câu Thánh vịnh sau: “Chư dân hãy …….. danh Ngài, danh vĩ đại khả tôn khả úy, danh thánh thiện dường bao” (Tv 98, 3)',
				answer: "XƯNGTỤNG",
				position: 20,
				orientation: "across",
				startx: 2,
				starty: 20
			},
            {
            	clue: "Năm Phụng Vụ được khởi đầu từ Chúa nhật thứ I mùa vọng và kết thúc vào Chúa nhật thứ XXXIV mùa thường niên, Chúa nhật mừng lễ gì với bậc lễ trọng?",
            	answer: "ĐỨCGIÊSUKITÔVUAVŨTRỤ",
            	position: 1,
            	orientation: "down",
            	startx: 7,
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
