'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([{
  "type": "action_update",
  "message0": "Installation %1 Méthode %2 Paquet %3 %4 Mettre à jour les dépôts %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "installation_method",
      "options": [
        [
          "apt",
          "apt"
        ],
        [
          "yum",
          "yum"
        ]
      ]
    },
    {
      "type": "field_input",
      "name": "packet_name",
      "text": ""
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "update_cache",
      "checked": false
    }
  ],
  "previousStatement": null,
  "colour": 160,
  "tooltip": "Définition d'une tâche d'installation / mise à jour d'un paquet",
  "helpUrl": ""
},
{
  "type": "task_definition",
  "message0": "Nom %1 %2 Action %3",
  "args0": [
    {
      "type": "field_input",
      "name": "task_name",
      "text": "default"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "action",
      "check": [
        "action_update",
        "action_unarchive",
        "action_lineinfile",
        "action_shell",
        "action_user"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Définition d'une tâche",
  "helpUrl": "https://docs.ansible.com/ansible/2.6/user_guide/playbooks_intro.html"
},
{
  "type": "block_tasks",
  "message0": "Tâches %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "NAME",
      "check": "task_definition"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "Bloc pour définir les tâches à réaliser",
  "helpUrl": "https://docs.ansible.com/ansible/2.6/user_guide/playbooks_intro.html"
},
{
  "type": "action_unarchive",
  "message0": "Charger un fichier d'archive %1 Fichier source %2 %3 Destination %4 %5 Changer les propriétés du fichier %6 %7 Propriétaire %8 %9 Groupe %10",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "unarchive_src",
      "text": ""
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "unarchive_dest",
      "text": ""
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "unarchive_change_properties",
      "checked": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "unarchive_user",
      "text": "default"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "unarchive_group",
      "text": "default"
    }
  ],
  "previousStatement": null,
  "colour": 160,
  "tooltip": "Définition d'une action de copie et désarchivage d'un fichier archive",
  "helpUrl": "https://docs.ansible.com/ansible/2.6/modules/unarchive_module.html?highlight=unarchive"
},
{
  "type": "action_lineinfile",
  "message0": "Ecrire une ligne dans un fichier %1 Fichier %2 %3 Ligne à écrire %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "lineinfile_path",
      "text": ""
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "lineinfile_line",
      "text": "default"
    }
  ],
  "previousStatement": null,
  "colour": 160,
  "tooltip": "Ajouter une ligne dans un fichier",
  "helpUrl": "https://docs.ansible.com/ansible/2.6/modules/lineinfile_module.html?highlight=lineinfile"
},
{
  "type": "action_user",
  "message0": "Ajouter un utilisateur %1 Nom de l'utilisateur %2 %3 Commentaire %4 %5 Mot de passe %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "user_username",
      "text": ""
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "user_comment",
      "text": ""
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "user_password",
      "text": ""
    }
  ],
  "previousStatement": null,
  "colour": 160,
  "tooltip": "Ajouter un utilisateur",
  "helpUrl": "https://docs.ansible.com/ansible/2.6/modules/user_module.html?highlight=user"
},
{
  "type": "action_shell",
  "message0": "Lancer une commande Shell %1 Commande %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "shell_shell",
      "text": ""
    }
  ],
  "previousStatement": null,
  "colour": 160,
  "tooltip": "Faire exécuter une commande Shell",
  "helpUrl": "https://docs.ansible.com/ansible/2.6/modules/shell_module.html?highlight=shell"
},
{
  "type": "block_connection",
  "message0": "Connection à %1 %2 Devenir administrateur %3 méthode %4",
  "args0": [
    {
      "type": "field_input",
      "name": "connection_hosts",
      "text": "all"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "connection_become",
      "checked": false
    },
    {
      "type": "field_dropdown",
      "name": "connection_become_method",
      "options": [
        [
          "su",
          "su"
        ],
        [
          "sudo",
          "sudo"
        ]
      ]
    }
  ],
  "nextStatement": null,
  "colour": 20,
  "tooltip": "Informations de connections",
  "helpUrl": ""
}]);