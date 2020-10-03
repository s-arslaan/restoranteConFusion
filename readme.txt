----------INSTALLATION OF LESS COMPILER------------
Install less compiler globally
     npm install -g less


TO compile and run convert less css code into normal css->
	lessc <less_filename> <new_file-name>
EG:     lessc styles.less styles.css


------INSTALLATION OF SASS-------------

	npm install -g sass
In pacakge.json:--ADD in scripts
	
	"scripts":{
	     ....
	    "scss": "node-sass -o css/ css/"
	}

Now we can compile to make .css files-->
	npm run scss