/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Initial Developer of the Original Code is Fireinput Inc.
 *
 * Portions created by the Initial Developer are Copyright (C) 2007
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *     Olly Ja <ollyja@gmail.com>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** 
 */
const prefNames =
[
    {name: "interfaceLanguage", type: "STRING", value: LANGUAGE_ZH},
    {name: "defaultInputMethod", type: "STRING", value: SMART_PINYIN},
    {name: "inputMethodList", type: "STRING", value: ""},
    {name: "defaultInputEncoding", type: "STRING", value: ENCODING_ZH},
    {name: "saveHistory", type: "BOOL", value: true},
    {name: "autoInsert", type: "BOOL", value: true},
    {name: "firstRun",type: "STRING", value: ""},
    {name: "IMEBarPosition", type: "STRING", value: IME_BAR_TOP},
    {name: "themeID", type: "STRING", value: "default"},
    {name: "updateFreq", type: "BOOL", value: true},
    {name: "autoLoad", type: "BOOL", value: true},
    {name: "hiddenInputMethod", type: "STRING", value: null},
    {name: "lastTableUpdate", type: "STRING", value: ''},
    {name: "tableUpdateInterval", type: "INT", value: 12},
    {name: "inputKeyExactMatch", type: "BOOL", value: false},
    {name: "enableUrlbarInput", type: "BOOL", value: false},

    /* guest email/name for accessing server resouces */
    {name: "serverGuestName", type: "STRING", value: ''}, 
    {name: "serverGuestId", type: "STRING", value: ''}, 

    /* popup gui css */
    {name: "inputboxFontcolor", type: "STRING", value: "#123456"},
    {name: "inputboxFontsize", type: "INT", value: 9},
    {name: "wordselectionFontcolor", type: "STRING", value: "#080D13"},
    {name: "wordselectionFontsize", type: "INT", value: 10},
    {name: "wordselectionNum", type: "INT", value: 9},

    /* key setup */
    {name: "openKey", type: "STRING", value: "1970"},
    {name: "openEditorKey", type: "STRING", value: "1107"},
    {name: "toggleIMEKey", type: "STRING", value: "514"},
    {name: "quickToggleIMEKey", type: "STRING", value: "256"},
    {name: "switchInputMethodKey", type: "STRING", value: "1155"},
    {name: "toggleHalfKey", type: "STRING", value: "1235"},
    {name: "togglePuncKey", type: "STRING", value: "1283"},
    {name: "toggleEncodingKey", type: "STRING", value: "1251"},
    {name: "pageUpKey", type: "STRING", value: "3008"},
    {name: "pageDownKey", type: "STRING", value: "3040"},
    {name: "selectFirstKey", type: "STRING", value: "512"},
    {name: "selectSecondKey", type: "STRING", value: "944"},
    {name: "selectThirdKey", type: "STRING", value: "3056"},

    /*plugin features*/
    {name: "enableContextReader", type: "BOOL", value: true}
    
];

const prefInterfaceUI = [ 
            {id: "fireinputSettingMenu", strKey: "fireinput.menu.setting.label", attribute: "label"},           
            {id: "fireinputDefaultIMEBarPos", strKey: "fireinput.pref.imebar.position", attribute: "label"},           
            {id: "fireinputIMEBarPosTop", strKey: "fireinput.pref.imebar.position.top", attribute: "label"},           
            {id: "fireinputIMEBarPosBottom", strKey: "fireinput.pref.imebar.position.bottom", attribute: "label"},           
            {id: "autoInsert", strKey: "fireinput.pref.auto.insert", attribute: "label"},           
            {id: "autoInsert", strKey: "fireinput.pref.auto.insert.tooltip", attribute: "tooltiptext"},           
            {id: "fireinputConfigInputWindow", strKey: "fireinput.pref.inputwindow.setting", attribute: "label"},           
            {id: "fireinputDefaultInputMethod", strKey: "fireinput.pref.input.method", attribute: "label"},           
            {id: "saveHistory", strKey: "fireinput.pref.save.history", attribute: "label"},           
            {id: "updateFreq", strKey: "fireinput.pref.update.freq", attribute: "label"},           
            {id: "autoLoad", strKey: "fireinput.pref.auto.load", attribute: "label"},           
            {id: "fireinputInterfaceLanguage", strKey: "fireinput.choose.interface.language", attribute: "label"},
            {id: "fireinputLanguageChinese", strKey: "fireinput.chinese.label", attribute: "label"},           
            {id: "fireinputLanguageEnglish", strKey: "fireinput.english.label", attribute: "label"},           
            {id: "imePinyinQuan", strKey: "fireinput.pinyin.quan.label", attribute: "label"},           
            {id: "imePinyinShuangZiGuang", strKey: "fireinput.pinyin.shuang.ziguang.label", attribute: "label"},
            {id: "imePinyinShuangMS", strKey: "fireinput.pinyin.shuang.ms.label", attribute: "label"},
            {id: "imePinyinShuangChineseStar", strKey: "fireinput.pinyin.shuang.chinesestar.label", attribute: "label"},
            {id: "imePinyinShuangSmartABC", strKey: "fireinput.pinyin.shuang.smartabc.label", attribute: "label"},
            {id: "imeWubi86", strKey: "fireinput.wubi86.label", attribute: "label"},
            {id: "imeWubi98", strKey: "fireinput.wubi98.label", attribute: "label"},
            {id: "imeCangjie5", strKey: "fireinput.cangjie5.label", attribute: "label"},
            {id: "imeZhengma", strKey: "fireinput.zhengma.label", attribute: "label"},
            {id: "fireinputAMB", strKey: "fireinput.pref.amb.label", attribute: "label"},
            {id: "imeAdvancedConfig", strKey: "fireinput.pref.ime.advanced.label", attribute: "label"},
            {id: "configHotKey", strKey: "fireinput.pref.hotkey.config.label", attribute: "label"},
            {id: "fireinputKeyExactMatch", strKey: "fireinput.pref.amb.inputkey.match", attribute: "label"}
      ]; 


function fireinputPrefInit()
{
    // get default language first 
    var defaultLanguage = fireinputPrefGetDefault("interfaceLanguage"); 

    // update UI 
    for(var i =prefInterfaceUI.length-1; i>=0; i--)
    {
       var id = prefInterfaceUI[i].id; 
       var strKey = prefInterfaceUI[i].strKey; 
       var attr = prefInterfaceUI[i].attribute; 
 
       var value = FireinputUtils.getLocaleString(strKey + defaultLanguage); 
       var handle = document.getElementById(id); 
       if(!handle)
          handle = document.documentElement.getButton(id); 
       if(!handle) 
          continue; 
       handle.setAttribute(attr, value); 
    }
}

function fireinputPrefGetType(option)
{
   for(var i =prefNames.length-1; i>=0; i--)
    {
       if(option == prefNames[i].name)
       {
          return prefNames[i].type; 
       }
    }
 
    return 'STRING'; 
}

function fireinputPrefGetDefValue(option)
{
   for(var i =prefNames.length-1; i>=0; i--)
    {
       if(option == prefNames[i].name)
       {
          return prefNames[i].value;
       }
    }

    return null; 
}

function fireinputPrefGetDefault(option)
{
    var type = fireinputPrefGetType(option); 
    var value = fireinputPrefGetDefValue(option); 
    try {
        var getvalue = FireinputPref.getPref(option, type); 
        if(type == "BOOL")
        {
          if(getvalue == true)
             value = true;
          else
             value = false; 
        }
        else 
          value = getvalue; 

    } catch(e) { }
 
    // special handling for certain options   
    if(option == "interfaceLanguage")
    {
        if(value.length > 0)
          value  = "." + value; 
    }

    return value; 
}

    
function fireinputPrefShowing(popup)
{
    for (var child = popup.firstChild; child; child = child.nextSibling)
    {
       if (child.localName == "menuitem")
       {
          var option = child.getAttribute("option");
          if (option)
          {
             var type = child.getAttribute("type"); 
             if(type == "radio")
             { 
                var value = child.getAttribute("value"); 
                try
                {
                   var optionType = fireinputPrefGetType(option);
                   var savedValue = FireinputPref.getPref(option, optionType);
                   child.setAttribute("checked", savedValue == value ? true : false); 
                }
                catch(e)
                {
                   var defaultValue = fireinputPrefGetDefault(option); 
                   child.setAttribute("checked", defaultValue == value ? true : false); 
                }
             }

             if(type == "checkbox")
             { 
                // checkbox is BOOL type. 
                try
                {
                   var savedValue = FireinputPref.getPref(option, "BOOL");
                   child.setAttribute("checked", savedValue); 
                }
                catch(e)
                {
                   var defaultValue = fireinputPrefGetDefault(option); 
                   child.setAttribute("checked", defaultValue); 
                }
             }

          }
       } /* if menuitem */

    }
}

function fireinputPrefSave(menuitem, ovalue)
{
    
    var option = null; 
    if(menuitem.getAttribute)
        option = menuitem.getAttribute("option");

    if (option)
    {
       var type = menuitem.getAttribute("type");
       if(type == "radio")
       { 
          var value = menuitem.getAttribute("value");
          try 
          {
             FireinputPref.setPref(option,"STRING", value); 
          }
          catch(e) {}; 
       }

       if(type == "checkbox")
       { 
          try 
          {
             FireinputPref.setPref(option,"BOOL", menuitem.getAttribute("checked") == "true"); 
          }
          catch(e) {}; 
       }
    }
    else 
    {
       // might be real option 
       var type = fireinputPrefGetType(menuitem); 
       if(type != 'undefined')
       {
          try 
          {
             FireinputPref.setPref(menuitem,type, ovalue); 
          }
          catch(e) {}; 
       }
    }
   
    return true; 
}

var FireinputPrefDefault = {
    getAMBOption: function(option)
    {
       var ambEnabled = false; 
       try {
          var value = FireinputPref.getPref(option, "BOOL");
          if(value == true)
             ambEnabled = true;
          else
             ambEnabled = false;
       }
       catch(e)
       { };

       return ambEnabled;
    },

}; 
