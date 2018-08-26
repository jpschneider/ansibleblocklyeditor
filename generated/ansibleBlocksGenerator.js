Blockly.JavaScript['action_update'] = function(block) {
  var dropdown_installation_method = block.getFieldValue('installation_method');
  var text_packet_name = block.getFieldValue('packet_name');
  var checkbox_update_cache = block.getFieldValue('update_cache') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['task_definition'] = function(block) {
  var text_task_name = block.getFieldValue('task_name');
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['block_tasks'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['action_unarchive'] = function(block) {
  var text_unarchive_src = block.getFieldValue('unarchive_src');
  var text_unarchive_dest = block.getFieldValue('unarchive_dest');
  var checkbox_unarchive_change_properties = block.getFieldValue('unarchive_change_properties') == 'TRUE';
  var text_unarchive_user = block.getFieldValue('unarchive_user');
  var text_unarchive_group = block.getFieldValue('unarchive_group');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['action_lineinfile'] = function(block) {
  var text_lineinfile_path = block.getFieldValue('lineinfile_path');
  var text_lineinfile_line = block.getFieldValue('lineinfile_line');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['action_user'] = function(block) {
  var text_user_username = block.getFieldValue('user_username');
  var text_user_comment = block.getFieldValue('user_comment');
  var text_user_password = block.getFieldValue('user_password');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['action_shell'] = function(block) {
  var text_shell_shell = block.getFieldValue('shell_shell');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['block_connection'] = function(block) {
  var text_connection_hosts = block.getFieldValue('connection_hosts');
  var checkbox_connection_become = block.getFieldValue('connection_become') == 'TRUE';
  var dropdown_connection_become_method = block.getFieldValue('connection_become_method');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};