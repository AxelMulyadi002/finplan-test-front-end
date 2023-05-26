const findWords = (story, search) => {
	const lowerCase = story.toLowerCase();
	const splitWords = lowerCase.split(' ');

	const result = splitWords.filter((word) => {
		return search.includes(word);
	});

	return result;
};

const story =
	'Berikut adalah kisah sang gajah. Sang gajah memiliki teman serigala bernama DoeSang. Gajah sering dibela oleh serigala ketika harimau mendekati gajah.';
const search = ['gajah', 'gajah', 'serigala', 'serigala', 'harimau'];

console.log(findWords(story, search));
