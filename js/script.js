// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "Có 3 nhân đức ______ là: đức Tin, đức Cậy, đức Mến",
					answer: "ĐỐITHẦN",
					position: 1,
					orientation: "across",
					startx: 8,
					starty: 1
				},
			 	{
					clue: "1 trong 7 ơn Chúa Thánh Thần.",
					answer: "DAODUC",
					position: 2,
					orientation: "across",
					startx: 4,
					starty: 2
				},
				{
					clue: "Kinh Thánh gồm 2 phần là: Tân Ước và _______",
					answer: "CUUUOC",
					position: 3,
					orientation: "across",
					startx: 8,
					starty: 3
				},
				{
					clue: "Người được Thiên Chúa chọn dẫn dân Israel vượt qua Biển Đỏ.",
					answer: "MOSE",
					position: 4,
					orientation: "across",
					startx: 8,
					starty: 4
				},
				{
					clue: 'Hoàn thành câu lời Chúa: “Anh em hãy mang lấy ách của tôi, và hãy học với tôi, vì tôi có lòng hiền hậu và khiêm nhường. Tâm hồn anh em sẽ được nghỉ ngơi bồi dưỡng. Vì ách tôi êm ái, và gánh tôi _______” (Mt 11, 29-30)',
					answer: "NHENHANG",
					position: 5,
					orientation: "across",	
					startx: 6,
					starty: 5
				},
				{
					clue: 'Bài ca “Ngợi Khen” đã được lấy trực tiếp từ Tin Mừng (Lc 1, 46-55) nói về những lời mà Đức Maria đã thốt lên khi tới thăm người chị bà con là bà Elizabeth. Tên gọi khác của bài ca “Ngợi Khen” là gì?',
					answer: "MAGNIFICAT",
					position: 6,
					orientation: "across",
					startx: 8,
					starty: 6
				},
				{
					clue: "Vua Đavid đã chiến thắng gã khổng lồ _______",
					answer: "GOLIAT",
					position: 7,
					orientation: "across",
					startx: 7,
					starty: 7
				},
				{
					clue: "Tên gọi khác của Thánh Tông Đồ Bathôlômêô là gì?",
					answer: "NATHANAEN",
					position: 8,
					orientation: "across",
					startx: 3,
					starty: 8
				},
				{
					clue: 'Tên của Thánh Tông Đồ được gọi là “Người môn đệ được Chúa yêu quý”?',
					answer: "GIOAN",
					position: 9,
					orientation: "across",
					startx: 8,
					starty: 9
				},
				{
					clue: 'Chúa Giêsu thiết lập Bí tích này trong bữa Tiệc Ly, trước khi Ngài đi chịu chết. Tên của Bí tích này là gì?',
					answer: "THANHTHE",
					position: 10,
					orientation: "across",
					startx: 8,
					starty: 10
				},
				{
					clue: 'Cải tội 7 mối có 7 đức: Thứ hai: ______. chớ hà tiện.',
					answer: "RONGRAI",
					position: 11,
					orientation: "across",
					startx: 8,
					starty: 11
				},
				{
					clue: 'Tên của Giao Ước mà Thiên Chúa đã ký kết với dân Israel?',
					answer: "SINAI",
					position: 12,
					orientation: "across",
					startx: 8,
					starty: 12
				},
				{
					clue: 'Hoàn thành đầy đủ nội dung câu sau: Tôn chỉ của Thiếu Nhi Thánh Thể là sống Lời Chúa và kết hợp với Chúa Giêsu Thánh Thể trong sự ……….., rước lễ, hy sinh và làm tông đồ, nhất là làm tông đồ cho giới trẻ như Công Đồng Vaticanô II trong sắc lệnh Tông đồ Giáo dân số 12 dạy: “Người trẻ phải làm tông đồ trước tiên và trực tiếp cho giới trẻ”.',
					answer: "CAUNGUYEN",
					position: 13,
					orientation: "across",
					startx: 8,
					starty: 13
				},
				{
					clue: '“Cha ông chúng tôi đã thờ phượng Thiên Chúa trên núi này, còn các ông lại bảo: _______. mới chính là nơi phải thờ phượng Thiên Chúa”. (Ga 4, 20). Nơi phải thờ phượng Thiên Chúa được nói đến trong câu Kinh Thánh là nơi nào?',
					answer: "GIERUSALEM",
					position: 14,
					orientation: "across",
					startx: 8,
					starty: 14
				},							
				{
					clue: 'Một trong các đặc ân của Đức Maria',
					answer: "DUCMEMONGTRIEU",
					position: 1,
					orientation: "down",
					startx: 8,
					starty: 1
				},					
				// {
				// 	clue: "Generally, if you go over 1kV per cm this happens",
				// 	answer: "arc",
				// 	position: 2,
				// 	orientation: "down",
				// 	startx: 5,
				// 	starty: 1
				// },
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
