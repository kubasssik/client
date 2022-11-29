

//Help for tariffs
class HelpCloud {
    constructor(help, labelTariffs, textHelp) {
        this.help = help;
        this.labelTariffs = labelTariffs;
        this.textHelp = textHelp;
    }
    helpFunc() {
        this.help.forEach((elmt, i) => {
            let text = i == i ? this.textHelp[i] : console.log(text);    
            elmt.textContent = text;
            this.labelTariffs.forEach(help => {
                help.addEventListener('mouseover', (text) => {
                    text.currentTarget.children[0].style.display = 'block';
                });
                help.addEventListener('mouseout', (text) => {
                    text.currentTarget.children[0].style.display = 'none';
                });
            });
        })
    }
}




export { HelpCloud}