export interface TApplication {
    id: string
    userId: string
    jobId: string
    resumeUrl: string
    coverLetter: string
    status: string
    notes: string
    createdAt: string
    updatedAt: string
    user: User
    job: Job
  }
  
  export interface User {
    id: string
    name: string
    email: string
    password: string
    role: string
    profilePhoto: any
    contactNumber: string
    address: string
    gender: string
    isDeleted: boolean
    createdAt: string
    updatedAt: string
  }
  
  export interface Job {
    id: string
    userId: string
    title: string
    company: string
    description: string
    skills: string[]
    salary: string
    type: string
    category: string
    numberOFOpenions: number
    location: string
    createdAt: string
    updatedAt: string
  }
  