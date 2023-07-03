function employeeInfo(staffID){
    let staff = ["name", "age", "gender", "position"]; 
    switch(staffID){
        case 001:
            staff[0] = "Mustapha";
            staff[1] = 24;
            staff[2] = "Male";
            staff[3] = "CEO";

        break;

        case 002:
            staff[0] = "Zack";
            staff[1] = 28;
            staff[2] = "Male";
            staff[3] = "Janitor";
            
        break;

        case 003:
            staff[0] = "Janice";
            staff[1] = 26;
            staff[2] = "Female";
            staff[3] = "PRO";
            
        break;

        case 004:
            staff[0] = "Isiah";
            staff[1] = 32;
            staff[2] = "Male";
            staff[3] = "Supervisor";
            
        break;

        case 005:
            staff[0] = "Mariam";
            staff[1] = 25;
            staff[2] = "Female";
            staff[3] = "Treasurer";
            
        break;

    }

        return staff;
}

    document.write(employeeInfo(001));
    document.write(employeeInfo(002));
  