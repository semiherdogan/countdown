# Countdown JS

Javascript countdown

## Usage

```javascript

new CountDown( remaining_time_in_seconds );

```

```javascript

//OPTIONS
var opts = {
	'div': 'counter', //ID
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

new CountDown( 10*60, opts );

```
