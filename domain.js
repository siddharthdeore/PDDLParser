	function Domain(domain_name){
		this.domain_name=domain_name;
		this.requirements = [];
		this.predicates = [];
		this.actions = [];
	}
	Domain.prototype.AddReqirement = function(req) {
		if(req === "strips" || req === "equality")
			this.requirements.indexOf(req) === -1 ? this.requirements.push(req) : console.log("This requirement already exists");
		else
			console.log("This requirement not supported yet");
	};

	Domain.prototype.AddPredicate = function(predicate){
		if(!existInArray(predicate, this.predicates)){
			this.predicates.push(predicate);
		}
		else
			console.log("This Predicate already exists");
	}
	Domain.prototype.AddAction = function(action) {
		if(!existInArray(action, this.actions)){
			this.actions.push(action);
		}
		else
			console.log("This Action already exists");
	};
	Domain.prototype.logPDDL = function () {
		console.log(this.domain_name);
		PDDL = "(domain ("+ this.domain_name+")\r\n";
		console.log(":requirements ");
		for (var i = this.requirements.length - 1; i >= 0; i--) {
			console.log( ":"+ this.requirements[i])
		}
		console.log(":predicates ");
		for (var i = this.predicates.length - 1; i >= 0; i--) {
			console.log(this.predicates[i]);
		}
		for (var i = this.actions.length - 1; i >= 0; i--) {
			console.log(":action "+ action_name);
			console.log(":parameters")
			for (var j = this.actions.parameters.length - 1; j >= 0; j--) {
				console.log(this.actions.parameters[j]);
			}
			console.log(":preconditions")
			for (var j = this.actions.preconditions.length - 1; j >= 0; j--) {
				console.log(this.actions.preconditions[j]);
			}
			console.log(":effects")
			for (var j = this.actions.effects.length - 1; j >= 0; j--) {
				console.log(this.actions.effects[j]);
			}
		}
	}
	Domain.prototype.ParsePDDL = function () {
		PDDL = 	"(domain ("+ this.domain_name+")\r\n";
		PDDL +=	"   (:requirements \r\n";
		for (var i = this.requirements.length - 1; i >= 0; i--) {
			PDDL += "      :"+ this.requirements[i] + "\r\n";
		}
		PDDL +=") \r\n";

		PDDL +=	"   (:predicates \r\n";
		for (var i = this.predicates.length - 1; i >= 0; i--) {
			PDDL += "      ("+ this.predicates[i] + ")\r\n";
		}
		PDDL +=") \r\n";

		for (var i = this.actions.length - 1; i >= 0; i--) {
			PDDL +=	"   (:action "+ this.actions[i].action_name + "\r\n";

			PDDL +=	"      :parameters (";
			for (var j = this.actions[i].parameters.length - 1; j >= 0; j--) {
				PDDL += "      ("+ this.actions[i].parameters[j] + ")\r\n";
			}
			PDDL +="      )\r\n";
			PDDL +=	"     :preconditions (";
			for (var j = this.actions[i].preconditions.length - 1; j >= 0; j--) {
				PDDL += "      ("+ this.actions[i].preconditions[j] + ")\r\n";
			}
			PDDL +="      )\r\n";

			PDDL +=	"     :effects (";
			for (var j = this.actions[i].effects.length - 1; j >= 0; j--) {
				PDDL += "      ("+ this.actions[i].effects[j] + ")\r\n";
			}
			PDDL +="	)\r\n";
		}
		PDDL +=")";
		PDDL +=")";
		console.log(PDDL);
		return PDDL;
	}
	//Preducate and its parameters
	function Predicate(predicate_name) {
		this.predicate_name=predicate_name;
		this.parameters=[];
	}
	Predicate.prototype.addParameters = function(param) {
		this.parameters.indexOf(param) === -1 ? this.parameters.push(param) : console.log("This parameter already exists");
	};

	////////////////////////////////////////////////////////////////////////////////////////////////////////
	function Action(action_name) {
		this.action_name=action_name;
		this.parameters=[];
		this.preconditions=[];
		this.effects=[];
	}
	Action.prototype.addParameters = function(param) {
		this.parameters.indexOf(param) === -1 ? this.parameters.push(param) : console.log("This parameter already exists");
	};
	Action.prototype.addEffects = function(effect) {
		this.effects.indexOf(effect) === -1 ? this.effects.push(effect) : console.log("This effect already exists");
	};
	Action.prototype.addPrecondition = function(precondition) {
		this.preconditions.indexOf(precondition) === -1 ? this.preconditions.push(precondition) : console.log("This precondition already exists");
	};

	////////////////////////////////////////////////////////////////////////////////////////////////////////
	//function to check object allready exist in array
	function existInArray(object, arr) {
		for (var i = arr.length - 1; i >= 0; i--) {
			if(arr[i]==object)
				return true;
		}
		return false;
	}
