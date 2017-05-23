/**
 * Semih ERDOGAN <hasansemiherdogan@gmail.com>
 */
var CountDown = (function () {
    function CountDown(minutes, opts) {
        this.options = {
            'div': 'counter',
            'end_text': 'Expired',
            'day_text': 'd',
            'hour_text': 'h',
            'minute_text': 'm',
            'second_text': 's',
            'template': "\n\t\t\t<span class=\"days\">{days}{day_text}</span>\n\t\t\t<span class=\"hours\">{hours}{hour_text}</span>\n\t\t\t<span class=\"minutes\">{minutes}{minute_text}</span>\n\t\t\t<span class=\"seconds\">{seconds}{second_text}</span>\n\t\t",
            'callback': function () { }
        };
        this.remaining_minutes = 0;
        this.remaining_minutes = minutes;
        //extend opts
        if (opts)
            for (var key in opts)
                if (this.options.hasOwnProperty(key))
                    this.options[key] = opts[key];
        this.Run();
    }
    CountDown.prototype.Run = function () {
        var count_down = this.remaining_minutes;
        if (count_down !== 0) {
            var t_1 = this;
            var counter_1 = setInterval(function () {
                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(count_down / (60 * 60 * 24)).toString();
                var hours = Math.floor((count_down % (60 * 60 * 24)) / (60 * 60)).toString();
                var minutes = Math.floor((count_down % (60 * 60)) / (60)).toString();
                var seconds = Math.floor((count_down % (60))).toString();
                var _template = t_1.options.template
                    .replace(/\{days\}/, days)
                    .replace(/\{hours\}/, hours)
                    .replace(/\{minutes\}/, minutes)
                    .replace(/\{seconds\}/, seconds)
                    .replace(/\{day_text\}/, t_1.options.day_text)
                    .replace(/\{hour_text\}/, t_1.options.hour_text)
                    .replace(/\{minute_text\}/, t_1.options.minute_text)
                    .replace(/\{second_text\}/, t_1.options.second_text);
                document.getElementById(t_1.options.div).innerHTML = _template;
                // If the count down is done!
                if (count_down <= 0) {
                    clearInterval(counter_1);
                    document.getElementById(t_1.options.div).innerHTML = t_1.options.end_text;
                    t_1.options.callback();
                }
                count_down = count_down - 1;
            }, 1000);
        }
    };
    return CountDown;
}());
