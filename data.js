const data0 = {
    "hits": {
        "total": 6,
		"pageSize": 5,
        "hits": [
            {
                "_source": {
					"EmployeeId": 200,
                    "FirstName": "Jennifer",
                    "LastName": "Whalen",
                    "Email": "JWHALEN",
                    "JobId": "AD_ASST",
                    "Salary": 4400,
                    "Department": "Administration"
                }
            },
            {
                "_source": {
					"EmployeeId": 201,
                    "FirstName": "Michael",
                    "LastName": "Hartstein",
                    "Email": "MHARTSTE",
                    "JobId": "MK_MAN",
                    "Salary": 13000,
                    "Department": "Marketing"
                }
            },
            {
                "_source": {
					"EmployeeId": 114,
                    "FirstName": "Den",
                    "LastName": "Raphaely",
                    "Email": "DRAPHAEL",
                    "JobId": "PU_MAN",
                    "Salary": 11000,
                    "Department": "Purchasing"
                }
            },
            {
                "_source": {
					"EmployeeId": 203,
                    "FirstName": "Susan",
                    "LastName": "Mavris",
                    "Email": "SMAVRIS",
                    "JobId": "HR_REP",
                    "Salary": 6500,
                    "Department": "Human Resources"
                }
            },
            {
                "_source": {
					"EmployeeId": 120,
                    "FirstName": "Matthew",
                    "LastName": "Weiss",
                    "Email": "MWEISS",
                    "JobId": "ST_MAN",
                    "Salary": 8000,
                    "Department": "Shipping"
                }
            }
        ]
    }
}

const data1 = {
    "hits": {
        "total": 6,
		"pageSize": 5,
        "hits": [
            {
                "_source": {
					"EmployeeId": 103,
                    "FirstName": "Alexander",
                    "LastName": "Hunold",
                    "Email": "AHUNOLD",
                    "JobId": "IT_PROG",
                    "Salary": 9000,
                    "Department": "IT"
                }
            }
        ]
    }
}

const getData = function(page) {
	if (page === 0) {
		return data0;
	}
	return data1;
}

module.exports = getData;