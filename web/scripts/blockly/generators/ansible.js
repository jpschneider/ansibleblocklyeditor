'use strict';

goog.provide('Blockly.JavaScript');

goog.require('Blockly.Generator');

Blockly.Ansible = new Blockly.Generator('Ansible');

Blockly.Ansible.INDENT = '  ';

Blockly.Ansible.finish = function(code) {
	return '---\n\r' + code;
}

Blockly.Ansible.scrub_ = function(block, code) {
	var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
	var nextCode = Blockly.Ansible.blockToCode(nextBlock);
	return code + nextCode;
}