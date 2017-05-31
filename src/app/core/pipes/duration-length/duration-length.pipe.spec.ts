import { DurationLengthPipe } from './duration-length.pipe';

describe('myDurationLength pipe', () => {
	// This pipe is a pure, stateless function so no need for BeforeEach
	let pipe = new DurationLengthPipe();

	it('transforms 50 to "50 min"', () => {
		expect(pipe.transform(50)).toBe('50min');
	});

	it('transforms 60 to "1h"', () => {
		expect(pipe.transform(60)).toBe('1h');
	});

	it('transforms 125 to "2h 5min"', () => {
		expect(pipe.transform(125)).toBe('2h 5min');
	});
});
