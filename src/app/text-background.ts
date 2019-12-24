import { Input, SimpleChanges, Component, ViewChild } from '@angular/core';
import { BackgroundGenerator } from './ColorGenerator';


@Component({
  selector: 'text-avatar',
  template: `
    <div class="u-text-avatar" [ngStyle]="styles">{{ firstLetter }}</div>
  `  
})
export class TextAvatarDirective {
  @Input() text: string;
  @Input() color: string;
  @Input() textColor: string;
  @Input() signlecolor : boolean;
  
  public firstLetter = "";
  public styles = {
    'background-color': "#fff",
    'color': "#ffffff"
  };
  
  constructor(private colorGenerator: BackgroundGenerator) {}

  ngOnChanges(changes: SimpleChanges) {
    let text = changes['text'] ? changes['text'].currentValue : null;
    let color = changes['color'] ? changes['color'].currentValue : null;
    let textColor = changes['textColor'] ? changes['textColor'].currentValue : this.styles.color;
    let issingle = changes['signlecolor'] ? changes['signlecolor'].currentValue : false;

    this.firstLetter = this.extractFirstCharacter(text,issingle);

    this.styles = {...this.styles, 'background-color': this.backgroundColorHexString(color, text,issingle), 'color': textColor}
  }

  private extractFirstCharacter(text: string,issingle:boolean): string {
    return ( issingle ? "K" :(text.charAt(0).toLocaleUpperCase() || ''));
  }

  private backgroundColorHexString(color: string, text: string,issingle:boolean): string {     
    return (issingle ? "#00688B":color) || this.colorGenerator.getColor(text);
  }
  private  generate_random_string(string_length){
    let random_string = '';
    let random_ascii;
    let ascii_low = 65;
    let ascii_high = 90
    for(let i = 0; i < string_length; i++) {
        random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string
}
}