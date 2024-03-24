interface CareerData {
    JvID: string
    JobTitle: string;
    Company: string;
    AccquisitionDate: string;
    URL: string;
    Location: string;
    FC: boolean;
}

// I feel like this should be inside the createCareerData function
// but I'm not sure how to do that, could be a svelte5 bugs thing
let careerData: CareerData[] = $state([]);

export function createCareerData() {
    return {
        get careerData() { return careerData },
        set(data: CareerData[]) { careerData = data }
    }
}