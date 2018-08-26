Blockly.Ansible['action_update'] = function(block) {
  var dropdown_installation_method = block.getFieldValue('installation_method');
  var text_packet_name = block.getFieldValue('packet_name');
  var checkbox_update_cache = block.getFieldValue('update_cache') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_installation_method + ':\n';
  code = code + Blockly.Ansible.INDENT + 'name: ' + text_packet_name + '\n';
  if (checkbox_update_cache) {
    code = code + Blockly.Ansible.INDENT + 'update-cache: yes\n';
  }
  return code;
};

Blockly.Ansible['task_definition'] = function(block) {
  var text_task_name = block.getFieldValue('task_name');
  var statements_action = Blockly.Ansible.statementToCode(block, 'action');
  // TODO: Assemble JavaScript into code variable.
  var code = '- name: ' + text_task_name + '\n';
  code = code + statements_action;
  return code;
};

Blockly.Ansible['block_tasks'] = function(block) {
  var statements_name = Blockly.Ansible.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = Blockly.Ansible.INDENT + 'tasks:\n';
  statements_name = Blockly.Ansible.addLoopTrap(statements_name, block.id) ||
      'hello';
  code = code + statements_name;
  return code;
};

Blockly.Ansible['action_unarchive'] = function(block) {
  var text_unarchive_src = block.getFieldValue('unarchive_src');
  var text_unarchive_dest = block.getFieldValue('unarchive_dest');
  var checkbox_unarchive_change_properties = block.getFieldValue('unarchive_change_properties') == 'TRUE';
  var text_unarchive_user = block.getFieldValue('unarchive_user');
  var text_unarchive_group = block.getFieldValue('unarchive_group');
  // TODO: Assemble JavaScript into code variable.
  var code = 'unarchive:\n';
  code = code + Blockly.Ansible.INDENT + 'src: ' + text_unarchive_src + '\n';
  code = code + Blockly.Ansible.INDENT + 'dest: '+ text_unarchive_dest + '\n';
  if (checkbox_unarchive_change_properties) {
    code = code + Blockly.Ansible.INDENT + 'owner: ' + text_unarchive_user + '\n';
    code = code + Blockly.Ansible.INDENT + 'group: ' + text_unarchive_group + '\n';
  }
  return code;
};

Blockly.Ansible['action_lineinfile'] = function(block) {
  var text_lineinfile_path = block.getFieldValue('lineinfile_path');
  var text_lineinfile_line = block.getFieldValue('lineinfile_line');
  // TODO: Assemble JavaScript into code variable.
  var code = 'lineinfile:\n';
  code = code + Blockly.Ansible.INDENT + 'path: ' + text_lineinfile_path + '\n';
  code = code + Blockly.Ansible.INDENT + 'line: \'' + text_lineinfile_line + '\'\n';
  return code;
};

Blockly.Ansible['action_user'] = function(block) {
  var text_user_username = block.getFieldValue('user_username');
  var text_user_comment = block.getFieldValue('user_comment');
  var text_user_password = block.getFieldValue('user_password');
  // TODO: Assemble JavaScript into code variable.
  var code = 'user:\n';
  code = code + Blockly.Ansible.INDENT + 'name: ' + text_user_username + '\n';
  code = code + Blockly.Ansible.INDENT + 'comment: ' + text_user_comment + '\n';
  code = code + Blockly.Ansible.INDENT + 'password: ' + text_user_password + '\n';
  return code;
};

Blockly.Ansible['action_shell'] = function(block) {
  var text_shell_shell = block.getFieldValue('shell_shell');
  // TODO: Assemble JavaScript into code variable.
  var code = 'shell: ' + text_shell_shell + '\n';
  return code;
};

Blockly.Ansible['block_connection'] = function(block) {
  var text_connection_hosts = block.getFieldValue('connection_hosts');
  var checkbox_connection_become = block.getFieldValue('connection_become') == 'TRUE';
  var dropdown_connection_become_method = block.getFieldValue('connection_become_method');
  // TODO: Assemble JavaScript into code variable.
  var code = '- hosts: '+text_connection_hosts+'\n';
  if (checkbox_connection_become) {
    code = code + Blockly.Ansible.INDENT + 'become: yes\n';
    code = code + Blockly.Ansible.INDENT + 'become_method:' + dropdown_connection_become_method + '\n';
  }
  return code;
};