import { Component, OnInit } from '@angular/core';


/***
        |This program generates up to 16 passwords of between 3 and 16 characters in 
        |length.
        |
        |You will be prompted for the values of all parameters when the program is run 
        |- there are no command line options to memorize.
        |
        |The passwords can either be written to the console or to a file (pwds.txt), 
        |or both.
        |
        |The passwords must contain at least one each of the following character types:
        |   lower-case letters :  a -> z
        |   upper-case letters :  A -> Z
        |   digits             :  0 -> 9
        |   other characters   :  !"#$%&'()*+,-./:;<=>?@[]^_{|}~
        |
        |Optionally, a seed can be set for the random generator 
        |(any non-zero Long integer) otherwise the default seed will be used. 
        |Even if the same seed is set, the passwords won't necessarily be exactly
        |the same on each run as additional random shuffles are always performed.
        |
		|There are three options to create new passord.
		|   Exclude Ambiguous    : {} [] () /\ ' " ` ~ , ; : . < >
		|   Exclude Similar      : Il1  O0  5S  2Z
		|   Auto Select Password : Auto select new password
		|   Save Preference      : save to local storage
		|
		|
		|
		|
        |You can also copy or send email the new password.
        |
        | 
        |Finally, the only command line options permitted are -h and -help which
        |will display this page and then exit.
        |
        |Any other command line parameters will simply be ignored and the program
        |will be run normally.
        |
***/

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  random_min = 12;
  random_max = 16;
  opt_uppercase = true;
  opt_lowercase = true;
  opt_numbers = true;
  opt_symbols = true;
  opt_no_amb = true;
  opt_no_similar = true;
  opt_autoselect = true;
  opt_save = true;

  _password = "";

  inputValue = true;

  _pattern = /[a-zA-Z0-9]/;
  _length: 13;
  _similar = /[Il1O05S2Z]/;
  _opt_no_amb = false;
  _opt_no_similar = true;
  passregex = '';

  constructor() { }

  ngOnInit(): void {


//document.getElementById("opt_uppercase").onchange =  function() { savePreference(); };
//document.getElementById("opt_lowercase").onchange =  function() { savePreference(); };
//document.getElementById("opt_numbers").onchange =  function() { savePreference(); };
//document.getElementById("opt_symbols").onchange =  function() { savePreference(); };

//document.getElementById("opt_no_amb").onchange =  function() { savePreference(); };
//document.getElementById("opt_no_similar").onchange =  function() { savePreference(); };
//document.getElementById("opt_autoselect").onchange =  function() { savePreference(); };
//document.getElementById("opt_save").onchange =  function() { savePreference(); };
  }

  opt_random_min(){
    if(this.random_min <= 15) {
      if(this.random_min >= this.random_max){
        this.random_max = this.random_min + 1;
      }
    } else {
      this.random_min= 12;
      this.random_max= 16;
      return;
    }
    if(this.random_min < 3) {
      this.random_min= 12;
      this.random_max= 16;
    }
    this.savePreference();
  }

  opt_random_max(){
    if(this.random_max <= 16) {
      if(this.random_max <= this.random_min){
        this.random_min = this.random_max - 1;
      }
    } else {
      this.random_min= 15;
      this.random_max= 16;
    }
    if(this.random_max < 4) {
      this.random_min= 12;
      this.random_max= 16;
    }
    this.savePreference();
  }

  copyPass() {
    if(this._password == ""){
      //Information
      alert('Nothing selected');	
    } else {
      (document.getElementById("password") as HTMLInputElement).focus();
      (document.getElementById("password") as HTMLInputElement).select();
      // document.getElementById("password").focus();
      // document.getElementById("password").select();
      document.execCommand('copy');
      alert('Copied to Clipboard');
      this.deselectAll();
    }
  }

  sendPass() {
    if(this._password == ""){
      //Information
      alert('Nothing selected');	
    } else {
      var link = "mailto:me@example.com;"
        + "?subject=" + escape("Here is your new password")
        + "&body=" + encodeURIComponent(
        "\r\n"+ 
        "----------\r\n")+ 
        escape(this._password) +
        encodeURIComponent("\r\n----------\r\n"+ 
        "Generated By Random Password Generator - https://localhost:8080.org/")
      ;
  
      window.location.href = link;
    }
  }

  savePreference() {
    let inp =  (document.getElementsByClassName("inp_text") as HTMLCollection)[0] as HTMLInputElement;

    if(this.inputValue) {
      const preference = [
      {
        "name": (document.getElementById("opt_random_min") as HTMLInputElement).name,
        "type": (document.getElementById("opt_random_min") as HTMLInputElement).type,
        "value": (document.getElementById("opt_random_min") as HTMLInputElement).value,
        "disabled": (document.getElementById("opt_random_min") as HTMLInputElement).disabled,
        "default": 12
      },
      {
        "name": (document.getElementById("opt_random_max") as HTMLInputElement).name,
        "type": (document.getElementById("opt_random_max") as HTMLInputElement).type,
        "value": (document.getElementById("opt_random_max") as HTMLInputElement).value,
        "disabled": (document.getElementById("opt_random_max") as HTMLInputElement).disabled,
        "default": 16
      },
      {
        "name": (document.getElementById("opt_uppercase") as HTMLInputElement).name,
        "type": (document.getElementById("opt_uppercase") as HTMLInputElement).type,
        "value": (document.getElementById("opt_uppercase") as HTMLInputElement).checked,
        "disabled": (document.getElementById("opt_uppercase") as HTMLInputElement).disabled,
        "default": true
      },
      {
        "name": (document.getElementById("opt_lowercase") as HTMLInputElement).name,
        "type": (document.getElementById("opt_lowercase") as HTMLInputElement).type,
        "value": (document.getElementById("opt_lowercase") as HTMLInputElement).checked,
        "disabled": (document.getElementById("opt_lowercase") as HTMLInputElement).disabled,
        "default": true
      },
      {
        "name": (document.getElementById("opt_numbers") as HTMLInputElement).name,
        "type": (document.getElementById("opt_numbers") as HTMLInputElement).type,
        "value": (document.getElementById("opt_numbers") as HTMLInputElement).checked,
        "disabled": (document.getElementById("opt_numbers") as HTMLInputElement).disabled,
        "default": true
      },
      {
        "name": (document.getElementById("opt_symbols") as HTMLInputElement).name,
        "type": (document.getElementById("opt_symbols") as HTMLInputElement).type,
        "value": (document.getElementById("opt_symbols") as HTMLInputElement).checked,
        "disabled": (document.getElementById("opt_symbols") as HTMLInputElement).disabled,
        "default": true
      },
      {
        "name": (document.getElementById("opt_no_amb") as HTMLInputElement).name,
        "type": (document.getElementById("opt_no_amb") as HTMLInputElement).type,
        "value": (document.getElementById("opt_no_amb") as HTMLInputElement).checked,
        "disabled": (document.getElementById("opt_no_amb") as HTMLInputElement).disabled,
        "default": false
      },
      {
        "name": (document.getElementById("opt_no_similar") as HTMLInputElement).name,
        "type": (document.getElementById("opt_no_similar") as HTMLInputElement).type,
        "value": (document.getElementById("opt_no_similar") as HTMLInputElement).checked,
        "disabled": (document.getElementById("opt_no_similar") as HTMLInputElement).disabled,
        "default": true
      },
      {
        "name": (document.getElementById("opt_autoselect") as HTMLInputElement).name,
        "type": (document.getElementById("opt_autoselect") as HTMLInputElement).type,
        "value": (document.getElementById("opt_autoselect") as HTMLInputElement).checked,
        "disabled": (document.getElementById("opt_autoselect") as HTMLInputElement).disabled,
        "default": false
      },
      {
        "name": (document.getElementById("opt_save") as HTMLInputElement).name,
        "type": (document.getElementById("opt_save") as HTMLInputElement).type,
        "value": (document.getElementById("opt_save") as HTMLInputElement).checked,
        "disabled": (document.getElementById("opt_save") as HTMLInputElement).disabled,
        "default": true
      }
      ];
      window.localStorage.setItem('preference', JSON.stringify(preference));
    }
  }

  deselectAll() {
    var element = document.activeElement;
    
    if (element && /INPUT|TEXTAREA/i.test(element.tagName)) {
      if ('selectionStart' in element) {
        (element as HTMLInputElement).selectionEnd = (element as HTMLInputElement).selectionStart;
      }
      (element as HTMLInputElement).blur();
    }
  
    if (window.getSelection) { // All browsers, except IE <=8
      window.getSelection().removeAllRanges();
    }
  };

  _generate() {
    // getting random length
    var _length = this._getRand(this.random_min, this.random_max);
    
    
    var result = "";
    this._password = "";
    for (let i=0; i < _length; i++) {
      // while(true) 
      // {
      //   result = String.fromCharCode(this._getRandomByte());
      //   console.log(this._opt_no_similar);
      //   if(this._opt_no_similar == true && this._opt_no_amb == false) {
      //     if(!this._similar.test(result) && this._pattern.test( result))
      //     {
      //       this._password += result;
      //     }
      //   } 
      //   if(this._opt_no_similar == true && this._opt_no_amb == true) {
      //     if(!_pattern_of_amb.test(result) && !this._similar.test(result) && this._pattern.test( result))
      //     {
      //       this._password += result;
      //     }
      //   } 
      //   if(this._opt_no_similar == false && this._opt_no_amb == true) {
      //     if(!_pattern_of_amb.test(result) && this._pattern.test( result))
      //     {
      //       this._password += result;
      //     }
      //   } 
      //   if(this._opt_no_similar == false && this._opt_no_amb == false){
      //     if(this._pattern.test( result))
      //     {
      //       this._password += result;
      //     }
      //   }
      // }
      this._password += this.findSourceById();
    }
    console.log(this._password);
  }

  findSourceById(): string{
    var result = "";
    var _pattern = /[a-zA-Z0-9_\-\+\.]/;
    this.passregex = "";
    
    if((document.getElementById("opt_uppercase") as HTMLInputElement).checked) {
      this.passregex = this.passregex + "A-Z";
    }
    
    if((document.getElementById("opt_lowercase") as HTMLInputElement).checked) {
      this.passregex = this.passregex + "a-z";
    }
    
    if((document.getElementById("opt_numbers") as HTMLInputElement).checked) {
      this.passregex = this.passregex + "0-9";
    }
    // ! @ # $ % ^ & * _ - + = | ?
    // {} [] () /\ ' " ` ~ , ; : . < >
    if((document.getElementById("opt_symbols") as HTMLInputElement).checked) {
      this.passregex = this.passregex + "!@#$%^&*_\\-\\+=|?{}\\[\\]/\\\\\\'\"`~,;:\\.<>";
    }
    if((document.getElementById("opt_no_amb") as HTMLInputElement).checked) {
      this._opt_no_amb = true;
    } else {
      this._opt_no_amb = false;
    }
    if((document.getElementById("opt_no_similar") as HTMLInputElement).checked) {
      this._opt_no_similar = true;
    } else {
      this._opt_no_similar = false;
    }

    this._pattern = new RegExp('[' + this.passregex + ']');
    var _pattern_of_amb = new RegExp('[' + "{}\\[\\]/\\\\\\'\"`~,;:\\.<>" + ']');

    while(true)
    {
      result = String.fromCharCode(this._getRandomByte());
      if(this._pattern.test(result))
      {
         return result;
      }
    }  
  }
  _getRandomByte() {
    // http://caniuse.com/#feat=getrandomvalues
    if(window.crypto && window.crypto.getRandomValues) 
    {
      var result = new Uint8Array(1);
      window.crypto.getRandomValues(result);
      return result[0];
    }
    else if(window.crypto && window.crypto.getRandomValues) 
    {
      var result = new Uint8Array(1);
      window.crypto.getRandomValues(result);
      return result[0];
    }
    else
    {
      return Math.floor(Math.random() * 256);
    }
  }

  _getRand(min:number, max:number) : number {
    return Math.floor(Math.random() * (+max - +min)) + +min;
  }

}
