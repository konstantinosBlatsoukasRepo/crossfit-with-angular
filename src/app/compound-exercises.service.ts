export class CompoundExercisesService {
    readonly compoundExercises: Array<string> = ["back squat", "deadlift", "bench press"];

    public getCompoundExercises(): Array<string> {
        return this.compoundExercises;
    }
}