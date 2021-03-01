const COMPANY_DATA = {
    Profile:
        {
            name: "",
            dp: "assets\images\icon.png",
            gender: '',
            bloodGroup: "",
            dob: "",
            donor: false,
            email: "",
            no: "",
            height: '',
            weight: '',
            pass: ""
        },
    Donors:[],
    Requests:[
    ],
    MyRequests:[],
    MyDonation:[],
    Notifications:[]
}

export default (state = COMPANY_DATA, action) => {
    console.log('action ==>',action)
    switch (action.type) {
        case "SETDATA":
            return ({
                ...state,
                users: [...state.users,action.payload]
            })
        case "SETAD":
            return ({
                ...state,
                users: [...state.ads,action.payload]
            })
            case "SETREQUESTS":
                return ({
                    ...state,
                    Requests: [...state.Requests,action.payload]
                })
            case "SENDREQUEST":
                return ({
                    ...state,
                    Requests: [...state.Requests,action.payload]
                })
            case "SETPROFILE":
                return ({
                    ...state,
                    current_user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    no: action.payload.phone,
                    donor: action.payload.donor,
                    bloodGroup: action.payload.bGroup,
                    pass: action.payload.password
                    
                }
            })
    }
    return state;
}