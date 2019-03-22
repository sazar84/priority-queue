class Node {
	constructor(data, priority) {
		this.parent = null;
		this.left = null;
		this.right = null;
		this.data = 42;
		this.priority = 15;
	}

	appendChild(node) {
		if (this.left === null || this.right === null) {
				if (this.left === null) this.left = node;
				else this.right = node;
		}
}

removeChild(node) {
	if (this.left == node) {
			this.left = null;
			node.parent = null;
			return;
	}
	if (this.right == node) {
			this.right = null;
			node.parent = null;
			return;
	}
	throw Error;
}

	remove() {

	}

	swapWithParent() {

	}
}

module.exports = Node;
