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

// Constants

const IOService = Components.classes["@mozilla.org/network/io-service;1"];
const StreamLoader = Components.classes["@mozilla.org/network/stream-loader;1"];
const ScriptableInputStream = Components.classes["@mozilla.org/scriptableinputstream;1"];

var FireinputStream = 
{
    loadData: function(url)
    {
       var lines = this.readLine(url);
       return lines; 
    },

    readLine: function(url)
    {
       var ioService = IOService.getService(Components.interfaces.nsIIOService);

       var channel;
       var stream;
       try
       {
            var uri = ioService.newFileURI(url);
            channel = ioService.newChannelFromURI(uri);
            stream = channel.open();
       }
       catch (exc)
       {
            return null;
       }

       try
       {
          var sis = ScriptableInputStream.getService(Components.interfaces.nsIScriptableInputStream); 
          sis.init(stream);

          var segments = [];
          for (var count = stream.available(); count; count = stream.available())
          {
             var segment = sis.read(count);
             segments.push(segment);
          }
          sis.close();
          var text = segments.join("");

          // var data = FireinputUnicode.getUnicodeString(text); 
          var lines = text.split(/\r\n|\r|\n/);
          return lines;
        }
        catch (exc)
        {
            stream.close();
        }

        return null; 
    }, 

    loadDataAsync: function(url, user)
    {
       var ioService = IOService.getService(Components.interfaces.nsIIOService);

       var uri = ioService.newFileURI(url);
       var channel = ioService.newChannelFromURI(uri);
       function processCallback(line)
       {
            var caller = user.caller; 
            var func =  user.onavailable; 
            func.call(caller, line); 
       }

       function completeCallback()
       {
            var caller = user.caller; 
            var func =  user.oncomplete; 
            if(func)
               func.call(caller);
       }
       var observer = new StreamObserver(processCallback, completeCallback);
       channel.asyncOpen(observer, null);
    }

};

// ************************************************************************************************

function StreamObserver(processCB, completeCB)
{
    this.processCB = processCB; 
    this.completeCB = completeCB; 
    this.data = [];
}   

StreamObserver.prototype =
{
    onStartRequest: function(request, context)
    {
    },

    onStopRequest: function(request, context, status)
    {
       this.completeCB(); 
    },

    processData: function(str)
    {
       var lines = str.split(/\r\n|\r|\n/);
       this.data = []; 
       if(str.lastIndexOf("\n") != 0)
       {
          this.data.push(lines.pop()); 
       }
   
       for(var i=0; i<lines.length; i++)
       {
       //      var data = FireinputUnicode.getUnicodeString(lines[i]);
             this.processCB(lines[i]);
       }
    },

    onDataAvailable: function(request, context, inStr, sourceOffset, count)
    {
       var sis = ScriptableInputStream.createInstance(Components.interfaces.nsIScriptableInputStream);
       sis.init(inStr);
       this.processData(this.data.join("") + sis.read(count));
    }
};
 


    
