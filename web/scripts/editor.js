   var blocklyArea = document.getElementById('blocklyArea');
  var blocklyDiv = document.getElementById('blocklyDiv');
  var workspace = Blockly.inject(blocklyDiv,
      {toolbox: document.getElementById('toolbox')});
  var onresize = function(e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(workspace);
  };
  window.addEventListener('resize', onresize, false);
  onresize();
  Blockly.svgResize(workspace);

  function generateCode() {
    var text = Blockly.Ansible.workspaceToCode(workspace);
    generateFile(text);
  }

  function generateXml() {
    var xml = Blockly.Xml.workspaceToDom(workspace);
    var text = Blockly.Xml.domToPrettyText(xml);
    generateFile(text);
  }

  function importXml() {
    var importedFile = document.getElementById('importedFile');
    if (importedFile.files.length != 0) {
      var importXmlFile = importedFile.files[0];
      var fileReader = new FileReader();
      fileReader.addEventListener('load', function(event) {
        var fileContents = event.target.result;
        var xml = Blockly.Xml.textToDom(fileContents);
        Blockly.Xml.domToWorkspace(xml, workspace);
      });
      fileReader.readAsText(importXmlFile);
    }
  }

  function generateFile(content) {
    var blob = new Blob([content], { type: 'text/plain' });
    var clickEvent = new MouseEvent("click", {
    "view": window,
    "bubbles": true,
    "cancelable": false
  });
    var anchor = document.createElement('a');

    anchor.download = document.getElementById('fileName').value || "playbook.yaml";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.textContent = 'Download file!';
    anchor.dispatchEvent(clickEvent);
  }

  document.getElementById('generateButton').addEventListener("click",
    generateCode
  );

  document.getElementById('generateXml').addEventListener("click",
    generateXml);

  document.getElementById('importButton').addEventListener("click",
    importXml);