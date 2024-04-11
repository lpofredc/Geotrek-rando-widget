import { Build, Component, h, Host, Prop } from '@stencil/core';
import { getOutdoorCourse, getOutdoorCourseTypes, getPoisNearCourse } from 'services/outdoor-courses.service';
import { getTouristicContentsNearOutdoorCourse } from 'services/touristic-contents.service';
import { getTouristicEventsNearOutdoorCourse } from 'services/touristic-events.service';
import { getCities, getDistricts, getThemes } from 'services/treks.service';
import state from 'store/store';

@Component({
  tag: 'grw-outdoor-course-provider',
  shadow: true,
})
export class GrwOutdoorCourseProvider {
  @Prop() languages = 'fr';
  @Prop() api: string;
  @Prop() outdoorCourseId: number;
  @Prop() portals: string;

  controller = new AbortController();
  signal = this.controller.signal;
  init: RequestInit = { cache: Build.isDev ? 'force-cache' : 'default', signal: this.signal };

  connectedCallback() {
    if (!state.api) {
      state.api = this.api;
      state.languages = this.languages.split(',');
      state.language = state.languages[0];
    }
    this.handleOutdoorCourse();
  }

  handleOutdoorCourse() {
    const requests = [];
    requests.push(!state.cities ? getCities(state.api, state.language, this.init) : new Response('null'));
    requests.push(!state.districts ? getDistricts(state.api, state.language, this.init) : new Response('null'));
    requests.push(!state.themes ? getThemes(state.api, state.language, this.portals, this.init) : new Response('null'));
    requests.push(!state.outdoorCourseTypes ? getOutdoorCourseTypes(state.api, state.language, this.init) : new Response('null'));
    requests.push(getTouristicContentsNearOutdoorCourse(state.api, state.language, this.outdoorCourseId, this.init));
    requests.push(fetch(`${state.api}touristiccontent_category/?language=${state.language}&published=true&fields=id,label,pictogram&page_size=999`, this.init));
    requests.push(getTouristicEventsNearOutdoorCourse(state.api, state.language, this.outdoorCourseId, this.init));
    requests.push(fetch(`${state.api}touristicevent_type/?language=${state.language}&published=true&fields=id,type,pictogram&page_size=999`, this.init));
    requests.push(getPoisNearCourse(state.api, state.language, this.outdoorCourseId, this.init));
    requests.push(fetch(`${state.api}poi_type/?language=${state.language}&fields=id,pictogram`, this.init));
    requests.push(getOutdoorCourse(state.api, state.language, this.outdoorCourseId, this.init));
    try {
      Promise.all([...requests])
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(
          async ([
            cities,
            districts,
            themes,
            outdoorCourseTypes,
            touristicContent,
            touristicContentCategory,
            touristicEvent,
            touristicEventType,
            pois,
            poiTypes,
            outdoorCourse,
          ]) => {
            state.networkError = false;

            if (cities) {
              state.cities = cities.results;
            }
            if (districts) {
              state.districts = districts.results;
            }
            if (themes) {
              state.themes = themes.results;
            }
            if (outdoorCourseTypes) {
              state.outdoorCourseTypes = outdoorCourseTypes.results;
            }
            if (touristicContent) {
              state.trekTouristicContents = touristicContent.results;
            }
            if (touristicContentCategory) {
              state.touristicContentCategories = touristicContentCategory.results;
            }
            if (touristicEvent) {
              state.trekTouristicEvents = touristicEvent.results;
            }
            if (touristicEventType) {
              state.touristicEventTypes = touristicEventType.results;
            }
            if (pois) {
              state.currentPois = pois.results;
            }
            if (poiTypes) {
              state.poiTypes = poiTypes.results;
            }
            state.currentOutdoorCourse = outdoorCourse;
          },
        );
    } catch (error) {
      if (!(error.code === DOMException.ABORT_ERR)) {
        state.networkError = true;
      }
    }
  }

  disconnectedCallback() {
    this.controller.abort();
    state.networkError = false;
  }

  render() {
    return <Host></Host>;
  }
}
