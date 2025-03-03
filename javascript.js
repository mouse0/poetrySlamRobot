var projects = [
		'Use a metaphor',
        'Say something specific but utterly preposterous',
        'Use at least one image for each of the five senses, either in succession or scattered randomly throughout the poem',
        'Use one example of synaethesia (mixing the senses)',
        'Use the proper name of a person and the proper name of a place',
        'Contradict something you said earlier in the poem',
        'Change direction or digress from the last thing you said',
        'Use a word (slang?) youve never seen in a poem',
        'Use a piece of false cause-and-effect logic',
        'Use a piece of "talk" youve actually heard (preferably in dialect and/or which you dont understand)',
        'Create a metaphor using the following construction: The (adjective) (concrete noun) of (abstract noun',
        'Use an image in such a way as to reverse its usual associative qualities',
        'Make the persona or character in the poem do something they could not do in "real life"',
        'Refer to yourself by nickname and in the third person',
        'Write in the future tense, such that part of the poem seems to be a prediction',
        'Modify a noun with an unlikely adjective',
        'Make a declaritive assertion that sounds convincing but finally makes no sense',
        'Use a phrase from a language other than english',
        'Make a nonhuman object say or do something human (personification)',
		'Vivid image that makes no statement but that echoes an image from earlier in the poem'
        ];

var response = [
		"Imagine you are at a televised debate and ask the president a question.",
		"Take on the persona of the president.",
		"Use a metaphor.",
		"Write in the future tense such that part of the poem seems to predict the future of our country.",
		"Two truths and a lie in the persona of the president.",
		"Use personification.",
		"Imagine you are a foreign leader responding to the president.",
		"Attempt to rationalize the president's statement.",
		"Vivid image that makes no statement but that echoes an image from earlier in the poem.",
		"Use a piece of false cause-and-effect logic."
	];

var response_image = [
	"images/tweet_response/2018-03-06_2-51-31.jpg",
	"images/tweet_response/2018-03-06_2-52-29.jpg",
	"images/tweet_response/2018-03-06_2-52-48.jpg",
	"images/tweet_response/2018-03-06_2-53-10.jpg",
	"images/tweet_response/2018-03-06_2-53-33.jpg",
	"images/tweet_response/2018-03-06_2-53-58.jpg",
	"images/tweet_response/2018-03-06_2-54-25.jpg",
	"images/tweet_response/2018-03-06_2-54-49.jpg",
	"images/tweet_response/2018-03-06_2-55-15.jpg",
	"images/tweet_response/2018-03-06_2-55-35.jpg",
	"images/tweet_response/2018-03-06_2-55-58.jpg",
	"images/tweet_response/2018-03-06_2-56-16.jpg",
	"images/tweet_response/2018-03-06_2-56-45.jpg",
	"images/tweet_response/2018-03-06_2-57-05.jpg",
	"images/tweet_response/2018-03-06_2-57-31.jpg",
	"images/tweet_response/2018-03-06_2-58-00.jpg",
	"images/tweet_response/2018-03-06_2-58-20.jpg",
	"images/tweet_response/2018-03-06_2-58-50.jpg",
	"images/tweet_response/2018-03-06_3-00-06.jpg",
	"images/globalwarming.jpg"
	];

var imagesArray = [
		"images/art-graffiti-abstract-vintage.jpg",                                    
		"images/black-and-white-lights-abstract-curves.jpg ",                         
		"images/blue-abstract-balls-spheres.jpg",                                                                                 
		"images/light-creative-abstract-colorful.jpg",                                
		"images/man-sunglasses-art-graffiti.jpg",                                     
		"images/pattern-abstract-honeycomb-metal.jpg",                                
		"images/pexels-photo (1).jpg",                                                
		"images/pexels-photo (2).jpg",                                                
		"images/pexels-photo (3).jpeg",                                               
		"images/pexels-photo-116021.jpeg",                                              
		"images/pexels-photo-121734.jpeg",                                              
		"images/pexels-photo-125509.jpeg",                                              
		"images/pexels-photo-129743.jpeg",                                              
		"images/pexels-photo-131634.jpeg",                                              
		"images/pexels-photo-136397.jpeg",                                              
		"images/pexels-photo-136419.jpeg",                                             
		"images/pexels-photo-139321.jpeg",                                              
		"images/pexels-photo-148523.jpeg",                                              
		"images/pexels-photo-153493.jpeg",                                              
		"images/pexels-photo-164005.jpeg",                                              
		"images/pexels-photo-206064.jpeg",                                              
		"images/pexels-photo-207130.jpeg",                                              
		"images/pexels-photo-207153.jpeg",                                              
		"images/pexels-photo-208139.jpeg",                                              
		"images/pexels-photo-210158.jpeg",                                              
		"images/pexels-photo-220071.jpeg",                                              
		"images/pexels-photo-220072.jpeg",                                              
		"images/pexels-photo-220783.jpeg",                                              
		"images/pexels-photo-225011.jpeg",                                              
		"images/pexels-photo-226589.jpeg",                                              
		"images/pexels-photo-227675.jpeg",                                              
		"images/pexels-photo-235985.jpeg",                                              
		"images/pexels-photo-242616.jpeg",                                              
		"images/pexels-photo-243136.jpeg",                                              
		"images/pexels-photo-245250.jpeg",                                              
		"images/pexels-photo-247671.jpeg",                                              
		"images/pexels-photo-247676.jpeg",                                              
		"images/pexels-photo-249798.png",                                               
		"images/pexels-photo-251287.png",                                               
		"images/pexels-photo-254770.jpeg",                                              
		"images/pexels-photo-255379.jpeg",                                              
		"images/pexels-photo-259698.jpeg",                                              
		"images/pexels-photo-260041.jpeg",                                              
		"images/pexels-photo-262367.jpeg",                                              
		"images/pexels-photo-262438.jpeg",                                              
		"images/pexels-photo-266526.jpeg",                                              
		"images/pexels-photo-268819.jpeg",                                              
		"images/pexels-photo-268941.jpeg",                                              
		"images/pexels-photo-272177.jpeg",                                              
		"images/pexels-photo-274131.jpeg",                                              
		"images/pexels-photo-285173.jpeg",                                              
		"images/pexels-photo-287748.jpeg",                                              
		"images/pexels-photo-288099.jpeg",                                              
		"images/pexels-photo-288100.jpeg",                                              
		"images/pexels-photo-289649.jpeg",                                              
		"images/pexels-photo-301664.jpeg",                                              
		"images/pexels-photo-302733.jpeg",                                              
		"images/pexels-photo-305197.jpeg",                                              
		"images/pexels-photo-310436.jpeg",                                              
		"images/pexels-photo-310452.jpeg",                                              
		"images/pexels-photo-311039.jpeg",                                              
		"images/pexels-photo-316093.jpeg",                                              
		"images/pexels-photo-325649.jpeg",                                              
		"images/pexels-photo-326240.jpeg",                                              
		"images/pexels-photo-327509.jpeg",                                              
		"images/pexels-photo-342005.jpeg",                                              
		"images/pexels-photo-355948.jpeg",                                              
		"images/pexels-photo-368774.jpeg",                                              
		"images/pexels-photo-370717.jpeg",                                              
		"images/pexels-photo-373543.jpeg",                                              
		"images/pexels-photo-38132.jpeg",                                               
		"images/pexels-photo-394377.jpeg",                                              
		"images/pexels-photo-397998.jpeg",                                              
		"images/pexels-photo-414579.jpeg",                                              
		"images/pexels-photo-417458.jpeg",                                              
		"images/pexels-photo-430207.jpeg",                                              
		"images/pexels-photo-459301.jpeg",                                              
		"images/pexels-photo-459642.jpeg",                                              
		"images/pexels-photo-519403.jpeg",                                              
		"images/pexels-photo-532561.jpeg",                                              
		"images/pexels-photo-532563.jpeg",                                              
		"images/pexels-photo-542343.jpeg",                                              
		"images/pexels-photo-544917.jpeg",                                              
		"images/pexels-photo-566641.jpeg",                                              
		"images/pexels-photo-589179.jpeg",                                              
		"images/pexels-photo-590697.jpeg",                                              
		"images/pexels-photo-593158.jpeg",                                              
		"images/pexels-photo-604684.jpeg",                                              
		"images/pexels-photo-634548.jpeg",                                              
		"images/pexels-photo-63952.jpeg",                                               
		"images/pexels-photo-672655.jpeg",                                              
		"images/pexels-photo-673648.jpeg",                                              
		"images/pexels-photo-676578.jpeg",                                              
		"images/pexels-photo-696515.jpeg",                                              
		"images/pexels-photo-696644.jpeg",                                              
		"images/pexels-photo-705911.jpeg",                                              
		"images/pexels-photo-713644.jpeg",                                              
		"images/pexels-photo-724994.jpeg",                                              
		"images/pexels-photo-775907.jpeg",                                              
		"images/pexels-photo-788891.jpeg",                                              
		"images/pexels-photo-96381.jpeg",                                               
		"images/pexels-photo.jpeg",                                                     
		"images/purple-abstract-blur-bokeh.jpg",                                        
		"images/stained-glass-colorful-glass-stained-glass-window-161043.jpeg",         
		"images/water-plant-green-fine-layers.jpg",                                                                          
		];

function newProject() {
	var randomNumber = Math.floor(Math.random() * (projects.length));
	document.getElementById('projectDisplay').innerHTML = projects[randomNumber];
}

function newImage() {
    var num = Math.floor(Math.random() * (imagesArray.length));
    document.getElementById('imageDisplay').src = imagesArray[num];
}

function newResponse() {
	var randoNumbo = Math.floor(Math.random() * (response.length));
	document.getElementById('responseDisplay').innerHTML = response[randoNumbo];
}

function newResponse_Image() {
    var numbo = Math.floor(Math.random() * (response_image.length));
    document.getElementById('response_imageDisplay').src = response_image[numbo];
}

