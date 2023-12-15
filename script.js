let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msg = document.querySelector("#msg");
let msgcont = document.querySelector(".msg-cont");
let turnO = true;
const winpattern = [
	[0, 1, 2],
	[0, 3, 6],
	[0, 4, 8],
	[1, 4, 7],
	[2, 5, 8],
	[2, 4, 6],
	[3, 4, 5],
	[6, 7, 8],
];
const reset = () => {
	turnO = true;
	enable();
	msgcont.classList.add("hide");
};

boxes.forEach((box) => {
	box.addEventListener("click", () => {
		if (turnO) {
			box.innerText = "O";
			turnO = false;
		} else {
			box.innerText = "X";
			turnO = true;
		}
		box.disabled = true;
		winner();
	});
});

const disable = () => {
	for (let box of boxes) {
		box.disabled = true;
	}
};

const enable = () => {
	for (let box of boxes) {
		box.disabled = false;
		box.innerText = "";
	}
};

const showwinner = (winner) => {
	msg.innerText = `Congratulations, Winner is ${winner}`;
	msgcont.classList.remove("hide");
	disable();
};

const winner = () => {
	for (let pattern of winpattern) {
		let pos1 = boxes[pattern[0]].innerText;
		let pos2 = boxes[pattern[1]].innerText;
		let pos3 = boxes[pattern[2]].innerText;
		if (pos1 != "" && pos1 != "" && pos1 != "") {
			if (pos1 === pos2 && pos2 === pos3) {
				showwinner(pos1);
			}
		}
	}
};

newbtn.addEventListener("click", reset);
resetbtn.addEventListener("click", reset);
