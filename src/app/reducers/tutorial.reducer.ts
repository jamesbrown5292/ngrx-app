import {Action, StateObservable } from '@ngrx/store'
import {Tutorial } from '../models/tutorial.model'
import * as TutorialActions from '../actions/tutorial.actions'

const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}

export function tutorialReducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload]
        default:
            return state;
    }
}