/**
 * Semih ERDOGAN <hasansemiherdogan@gmail.com>
 */

class CountDown {

	private options = {
		'div': 'counter',
		'end_text': 'Expired',
		'day_text': 'd',
		'hour_text': 'h',
		'minute_text': 'm',
		'second_text': 's',
		'template': `
			<span class="days">{days}{day_text}</span>
			<span class="hours">{hours}{hour_text}</span>
			<span class="minutes">{minutes}{minute_text}</span>
			<span class="seconds">{seconds}{second_text}</span>
		`,
		'callback': function() {}
	};

	private remaining_minutes = 0;

	constructor(minutes: number, opts: Object){
		this.remaining_minutes = minutes;

		//extend opts
		if( opts )
			for (var key in opts)
				if (this.options.hasOwnProperty(key)) 
					this.options[key] = opts[key];

		this.Run();
	}

	Run() {

		let count_down = this.remaining_minutes;

		if( count_down !== 0 ){
			
			let t = this;
			let counter = setInterval(function() {

				// Time calculations for days, hours, minutes and seconds
				let days	= Math.floor(count_down / (60 * 60 * 24)).toString();
				let hours	= Math.floor((count_down % (60 * 60 * 24)) / (60 * 60)).toString();
				let minutes = Math.floor((count_down % (60 * 60)) / (60)).toString();
				let seconds = Math.floor((count_down % (60))).toString();

				let _template = t.options.template
					.replace(/\{days\}/, days)
					.replace(/\{hours\}/, hours)
					.replace(/\{minutes\}/, minutes)
					.replace(/\{seconds\}/, seconds)
					.replace(/\{day_text\}/, t.options.day_text)
					.replace(/\{hour_text\}/, t.options.hour_text)
					.replace(/\{minute_text\}/, t.options.minute_text)
					.replace(/\{second_text\}/, t.options.second_text);

				document.getElementById(t.options.div).innerHTML = _template;

				// If the count down is done!
				if (count_down <= 0) {
					clearInterval(counter);
					document.getElementById(t.options.div).innerHTML = t.options.end_text;
					t.options.callback();
				}
				
				count_down = count_down-1;

			}, 1000);

		}
	}
}