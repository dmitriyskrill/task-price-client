const issuesList = [
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-164',
    'id': '6786815b8c7fca560892e453',
    'key': 'DEVELOPMENT-164',
    'version': 32,
    'statusStartTime': '2025-01-21T14:04:34.854+0000',
    'statusType': {
      'id': 'inProgress',
      'display': 'В процессе',
      'key': 'inProgress'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'Название коллекции: otherServicePassword\nПоля:\n\nАдрес  - url - string - textarea\nЛогин - login- string - textarea\nПароль - password - string - textField\nНаименование - name - string - textarea\nКомментарий - comment - string - textarea',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'previousStatusLastAssignee': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000008',
      'id': '8000000000000008',
      'display': 'Александр Лебедев',
      'cloudUid': 'ajejcfmem52su8qg67mh',
      'passportUid': 2082400803
    },
    'createdAt': '2025-01-14T15:23:07.388+0000',
    'commentWithExternalMessageCount': 0,
    'updatedAt': '2025-01-21T14:08:54.212+0000',
    'lastCommentUpdatedAt': '2025-01-15T06:05:42.468+0000',
    'summary': 'Пароли . otherServicePassword',
    'originalEstimation': 'P1D',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000008',
      'id': '8000000000000008',
      'display': 'Александр Лебедев',
      'cloudUid': 'ajejcfmem52su8qg67mh',
      'passportUid': 2082400803
    },
    'spent': 'P1DT6H',
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'estimation': 'P1D',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 2,
    'votes': 0,
    'assignee': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000008',
      'id': '8000000000000008',
      'display': 'Александр Лебедев',
      'cloudUid': 'ajejcfmem52su8qg67mh',
      'passportUid': 2082400803
    },
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/3',
      'id': '3',
      'key': 'inProgress',
      'display': 'В работе'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/31',
      'id': '31',
      'key': 'inQueue',
      'display': 'В очереди'
    },
    'favorite': false,
    'workLogs': [
      {
        'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-164/worklog/7',
        'id': 7,
        'version': 3,
        'issue': {
          'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-164',
          'id': '6786815b8c7fca560892e453',
          'key': 'DEVELOPMENT-164',
          'display': 'Пароли . otherServicePassword'
        },
        'comment': 'Несколько созвонов, создание фронта и бека',
        'createdBy': {
          'self': 'https://api.tracker.yandex.net/v2/users/8000000000000008',
          'id': '8000000000000008',
          'display': 'Александр Лебедев',
          'cloudUid': 'ajejcfmem52su8qg67mh',
          'passportUid': 2082400803
        },
        'updatedBy': {
          'self': 'https://api.tracker.yandex.net/v2/users/8000000000000008',
          'id': '8000000000000008',
          'display': 'Александр Лебедев',
          'cloudUid': 'ajejcfmem52su8qg67mh',
          'passportUid': 2082400803
        },
        'createdAt': '2025-01-16T06:00:55.938+0000',
        'updatedAt': '2025-01-16T15:26:47.847+0000',
        'start': '2025-01-15T06:00:29.000+0000',
        'duration': 'PT7H'
      },
      {
        'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-164/worklog/11',
        'id': 11,
        'version': 2,
        'issue': {
          'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-164',
          'id': '6786815b8c7fca560892e453',
          'key': 'DEVELOPMENT-164',
          'display': 'Пароли . otherServicePassword'
        },
        'comment': 'Правки backend, frontend кнопка delete (полный функционал) начало кнопки редактирования. Созвоны',
        'createdBy': {
          'self': 'https://api.tracker.yandex.net/v2/users/8000000000000008',
          'id': '8000000000000008',
          'display': 'Александр Лебедев',
          'cloudUid': 'ajejcfmem52su8qg67mh',
          'passportUid': 2082400803
        },
        'updatedBy': {
          'self': 'https://api.tracker.yandex.net/v2/users/8000000000000008',
          'id': '8000000000000008',
          'display': 'Александр Лебедев',
          'cloudUid': 'ajejcfmem52su8qg67mh',
          'passportUid': 2082400803
        },
        'createdAt': '2025-01-17T09:30:33.688+0000',
        'updatedAt': '2025-01-17T09:31:02.177+0000',
        'start': '2025-01-17T09:29:02.668+0000',
        'duration': 'PT4H'
      },
      {
        'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-164/worklog/12',
        'id': 12,
        'version': 1,
        'issue': {
          'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-164',
          'id': '6786815b8c7fca560892e453',
          'key': 'DEVELOPMENT-164',
          'display': 'Пароли . otherServicePassword'
        },
        'comment': 'Редактирование - полный функционал',
        'createdBy': {
          'self': 'https://api.tracker.yandex.net/v2/users/8000000000000008',
          'id': '8000000000000008',
          'display': 'Александр Лебедев',
          'cloudUid': 'ajejcfmem52su8qg67mh',
          'passportUid': 2082400803
        },
        'updatedBy': {
          'self': 'https://api.tracker.yandex.net/v2/users/8000000000000008',
          'id': '8000000000000008',
          'display': 'Александр Лебедев',
          'cloudUid': 'ajejcfmem52su8qg67mh',
          'passportUid': 2082400803
        },
        'createdAt': '2025-01-21T14:08:54.213+0000',
        'updatedAt': '2025-01-21T14:08:54.213+0000',
        'start': '2025-01-21T14:08:09.268+0000',
        'duration': 'PT3H'
      }
    ]
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-159',
    'id': '676fd8d11cd5e3688fa4a086',
    'key': 'DEVELOPMENT-159',
    'version': 20,
    'statusStartTime': '2025-01-15T06:11:37.357+0000',
    'statusType': {
      'id': 'inProgress',
      'display': 'В процессе',
      'key': 'inProgress'
    },
    'checklistDone': 0,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'https://moygrafik.docs.apiary.io/# - API приложения МойГрафик (МГ) \n\nhttps://app.moygrafik.ru/ - приложени (логин и пароль в keys.dev)',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'createdAt': '2024-12-28T10:54:09.935+0000',
    'checklistTotal': 2,
    'commentWithExternalMessageCount': 0,
    'deadline': '2025-01-18',
    'updatedAt': '2025-01-21T13:47:44.628+0000',
    'lastCommentUpdatedAt': '2025-01-15T10:47:16.731+0000',
    'summary': 'Показывать данные о размещении в МГ по мимо начала и окончания сметы. Т.е. для времени показывать и размещения',
    'originalEstimation': 'P2D',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'start': '2025-01-14',
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'estimation': 'P2D',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'checklistItems': [
      {
        'id': '67878f155e228b421da00fe6',
        'text': 'Простановка времени',
        'textHtml': '<p data-line="0" class="line">Простановка времени</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      },
      {
        'id': '67878f033984431f06b1d1af',
        'text': 'Кадры -> Табель -> Отчет по сотруднику за день',
        'textHtml': '<p data-line="0" class="line">Кадры -&gt; Табель -&gt; Отчет по сотруднику за день</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      }
    ],
    'votes': 0,
    'assignee': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000008',
      'id': '8000000000000008',
      'display': 'Александр Лебедев',
      'cloudUid': 'ajejcfmem52su8qg67mh',
      'passportUid': 2082400803
    },
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/3',
      'id': '3',
      'key': 'inProgress',
      'display': 'В работе'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/31',
      'id': '31',
      'key': 'inQueue',
      'display': 'В очереди'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-150',
    'id': '675064c7f89d712d38f0f1ec',
    'key': 'DEVELOPMENT-150',
    'version': 8,
    'summary': 'Добавить иконку для восстановления из корзины. Люди для подарков',
    'originalEstimation': 'PT0S',
    'statusStartTime': '2025-01-21T13:37:30.788+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'spent': 'PT30M',
    'start': '2025-01-10',
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-12-04T14:18:46.621+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'deadline': '2025-01-14',
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-21T13:47:25.151+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/12',
      'id': '12',
      'key': 'readyForTest',
      'display': 'Можно тестировать'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/32',
      'id': '32',
      'key': 'toUpload',
      'display': 'Для загрузки'
    },
    'favorite': false,
    'workLogs': [
      {
        'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-150/worklog/6',
        'id': 6,
        'version': 1,
        'issue': {
          'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-150',
          'id': '675064c7f89d712d38f0f1ec',
          'key': 'DEVELOPMENT-150',
          'display': 'Добавить иконку для восстановления из корзины. Люди для подарков'
        },
        'createdBy': {
          'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
          'id': '8000000000000004',
          'display': 'Дмитрий Бехтерев',
          'cloudUid': 'ajejdcmrggor5esajlfl',
          'passportUid': 865369739
        },
        'updatedBy': {
          'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
          'id': '8000000000000004',
          'display': 'Дмитрий Бехтерев',
          'cloudUid': 'ajejdcmrggor5esajlfl',
          'passportUid': 865369739
        },
        'createdAt': '2025-01-15T12:31:20.448+0000',
        'updatedAt': '2025-01-15T12:31:20.448+0000',
        'start': '2025-01-15T12:31:02.532+0000',
        'duration': 'PT30M'
      }
    ]
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-161',
    'id': '677fba4fcc197e679131e8fa',
    'key': 'DEVELOPMENT-161',
    'version': 45,
    'lastCommentUpdatedAt': '2025-01-16T06:27:44.011+0000',
    'summary': 'Доработка fix-коллекций',
    'statusStartTime': '2025-01-15T11:22:30.843+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'checklistDone': 7,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': '# Удаление последней записи открывает предыдущую закрытую\n\n ![image.png](/ajax/v2/attachments/289?inline=true =676x430) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2025-01-09T12:00:13.537+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 3,
    'checklistItems': [
      {
        'id': '677fbbda1cd5e3688fadd07c',
        'text': 'FixPrice (Ставки/оклады)',
        'textHtml': '<p data-line="0" class="line">FixPrice (Ставки/оклады)</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '677fbbe4159dde6a5ae18f7c',
        'text': 'FixPosition (Присвоение должностей. сотрудники)',
        'textHtml': '<p data-line="0" class="line">FixPosition (Присвоение должностей. сотрудники)</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '677fbbf61cd5e3688fadd08a',
        'text': 'FixHiredWorkerPosition (Присвоение должностей. Наемники) ------- Уточнить забываем ли про hiredWorker  в системе? Возможно "End" тоже устарело',
        'textHtml': '<p data-line="0" class="line">FixHiredWorkerPosition (Присвоение должностей. Наемники) <br />\nУточнить забываем ли про hiredWorker  в системе? Возможно "End" тоже устарело</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '677fc0b5cc197e679131f274',
        'text': 'FixDepartmentWorkDayTimeBoundaries (Установка графика работы подразделения)',
        'textHtml': '<p data-line="0" class="line">FixDepartmentWorkDayTimeBoundaries (Установка графика работы подразделения)</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '677fc122cc197e679131f291',
        'text': 'FixUserWorkDayTimeBoundaries (Установка индивидуального графика работы)',
        'textHtml': '<p data-line="0" class="line">FixUserWorkDayTimeBoundaries (Установка индивидуального графика работы)</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '677fc1461cd5e3688fadd87d',
        'text': 'MachineOptionalEquipmentFixPrice (Журнал прайс лист СТ) --- without "end" field',
        'textHtml': '<p data-line="0" class="line">MachineOptionalEquipmentFixPrice (Журнал прайс лист СТ) <br />\nwithout "end" field</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '677fc156cc197e679131f29c',
        'text': 'ownMachineFixPrices (Журнал прайс лист СТ. Доп. оборудование)  --- without "end" field',
        'textHtml': '<p data-line="0" class="line">ownMachineFixPrices (Журнал прайс лист СТ. Доп. оборудование)  <br />\nwithout "end" field</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 7,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-16T06:27:44.011+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/31',
      'id': '31',
      'key': 'inQueue',
      'display': 'В очереди'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-162',
    'id': '677fc5381cd5e3688fadd99c',
    'key': 'DEVELOPMENT-162',
    'version': 15,
    'summary': 'Сметы доп. столбцы',
    'originalEstimation': 'PT2H',
    'statusStartTime': '2025-01-15T06:15:35.763+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'spent': 'PT3H',
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'estimation': 'PT2H',
    'createdAt': '2025-01-09T12:46:47.304+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T19:05:59.869+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': [
      {
        'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-162/worklog/4',
        'id': 4,
        'version': 1,
        'issue': {
          'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-162',
          'id': '677fc5381cd5e3688fadd99c',
          'key': 'DEVELOPMENT-162',
          'display': 'Сметы доп. столбцы'
        },
        'createdBy': {
          'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
          'id': '8000000000000004',
          'display': 'Дмитрий Бехтерев',
          'cloudUid': 'ajejdcmrggor5esajlfl',
          'passportUid': 865369739
        },
        'updatedBy': {
          'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
          'id': '8000000000000004',
          'display': 'Дмитрий Бехтерев',
          'cloudUid': 'ajejdcmrggor5esajlfl',
          'passportUid': 865369739
        },
        'createdAt': '2025-01-09T17:17:41.408+0000',
        'updatedAt': '2025-01-09T17:17:41.408+0000',
        'start': '2025-01-09T17:17:28.813+0000',
        'duration': 'PT1H'
      },
      {
        'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-162/worklog/5',
        'id': 5,
        'version': 3,
        'issue': {
          'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-162',
          'id': '677fc5381cd5e3688fadd99c',
          'key': 'DEVELOPMENT-162',
          'display': 'Сметы доп. столбцы'
        },
        'comment': '65656544',
        'createdBy': {
          'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
          'id': '8000000000000004',
          'display': 'Дмитрий Бехтерев',
          'cloudUid': 'ajejdcmrggor5esajlfl',
          'passportUid': 865369739
        },
        'updatedBy': {
          'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
          'id': '8000000000000004',
          'display': 'Дмитрий Бехтерев',
          'cloudUid': 'ajejdcmrggor5esajlfl',
          'passportUid': 865369739
        },
        'createdAt': '2025-01-09T17:29:09.176+0000',
        'updatedAt': '2025-01-15T19:05:59.873+0000',
        'start': '2025-01-09T17:28:52.255+0000',
        'duration': 'PT2H'
      }
    ]
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-158',
    'id': '67642d2ff8999564939ab657',
    'key': 'DEVELOPMENT-158',
    'version': 12,
    'summary': 'ЗП отчет.  не считает итого по суточным и нет пробела',
    'statusStartTime': '2025-01-15T17:54:14.452+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'inProgress',
      'display': 'В процессе',
      'key': 'inProgress'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![Изображение WhatsApp 2024-12-25 в 11.48.43\\_c6a3726a.jpg](/ajax/v2/attachments/288?inline=true =789x418) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-12-19T14:26:55.340+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T17:54:14.451+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/3',
      'id': '3',
      'key': 'inProgress',
      'display': 'В работе'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/31',
      'id': '31',
      'key': 'inQueue',
      'display': 'В очереди'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-165',
    'id': '67878d7e3984431f06b1d132',
    'key': 'DEVELOPMENT-165',
    'version': 7,
    'lastCommentUpdatedAt': '2025-01-15T12:22:23.434+0000',
    'summary': 'Заказчик->График. Добавить ручную сортировку',
    'statusStartTime': '2025-01-15T12:22:23.435+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![image.png](/ajax/v2/attachments/291?inline=true =740x575) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2025-01-15T10:27:10.306+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T12:22:23.434+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/31',
      'id': '31',
      'key': 'inQueue',
      'display': 'В очереди'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/3',
      'id': '3',
      'key': 'inProgress',
      'display': 'В работе'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-96',
    'id': '664c9cfa97379e7f9e442694',
    'key': 'DEVELOPMENT-96',
    'version': 13,
    'summary': 'Запретить бесконтрольное автоматическое создание выходных дней',
    'statusStartTime': '2025-01-15T06:15:44.253+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 1,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-05-21T13:09:13.983+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'checklistItems': [
      {
        'id': '664c9f0ca9fa4600872b3778',
        'text': 'Убрать автоматическое создание на сервере',
        'textHtml': '<p>Убрать автоматическое создание на сервере</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '664c9f13a9fa4600872b377a',
        'text': 'Запаролить создание не клиенте',
        'textHtml': '<p>Запаролить создание не клиенте</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 2,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:44.253+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-98',
    'id': '6655ae9dc56a7e1d9c624122',
    'key': 'DEVELOPMENT-98',
    'version': 9,
    'summary': 'Штрафы УМ',
    'statusStartTime': '2025-01-15T06:15:44.154+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-05-28T10:14:53.948+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:44.154+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-95',
    'id': '664b690e97379e7f9e4374c6',
    'key': 'DEVELOPMENT-95',
    'version': 9,
    'summary': 'Вывести уведомления ДР свои, ДР чужие на главный экран',
    'statusStartTime': '2025-01-15T06:15:44.077+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-05-20T15:15:26.580+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:44.077+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-97',
    'id': '664cbb5a91bd39218018227d',
    'key': 'DEVELOPMENT-97',
    'version': 9,
    'summary': 'Простановка времени (добавить статусы и ОК,К)',
    'statusStartTime': '2025-01-15T06:15:43.982+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-05-21T15:18:50.441+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:43.982+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-99',
    'id': '6655aec0c56a7e1d9c624134',
    'key': 'DEVELOPMENT-99',
    'version': 21,
    'summary': 'Штрафы ОКС. Доработка',
    'statusStartTime': '2025-01-15T06:15:43.884+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 6,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-05-28T10:15:28.441+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'checklistItems': [
      {
        'id': '6655aeecf072c8394b8a88b6',
        'text': 'Список нарушений.',
        'textHtml': '<p>Список нарушений.</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '6655aeeff072c8394b8a88ba',
        'text': 'Сделать доступным для просмотра',
        'textHtml': '<p>Сделать доступным для просмотра</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '6655aef4c56a7e1d9c624151',
        'text': 'Для редактирования пароль.',
        'textHtml': '<p>Для редактирования пароль.</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '6655aef9f072c8394b8a88bd',
        'text': 'Первая загрузка автоматическая.',
        'textHtml': '<p>Первая загрузка автоматическая.</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '6655aefdc56a7e1d9c624157',
        'text': 'Показывать сразу весь список.',
        'textHtml': '<p>Показывать сразу весь список.</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '6655af0ac56a7e1d9c62415a',
        'text': 'Для Групп нарушений: автоматическая подгрузка',
        'textHtml': '<p>Для Групп нарушений: автоматическая подгрузка</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 6,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:43.884+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-94',
    'id': '66431d8e296f7d1c2d34ac0b',
    'key': 'DEVELOPMENT-94',
    'version': 23,
    'lastCommentUpdatedAt': '2024-05-14T08:16:29.315+0000',
    'summary': 'Филиалы',
    'statusStartTime': '2025-01-15T06:15:43.798+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 0,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![image.png](/ajax/v2/attachments/207?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-05-14T08:15:10.589+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'checklistItems': [
      {
        'id': '666a2d57c8f8804620cb09ab',
        'text': 'Добавить фильтр по филиам в отчет ексель',
        'textHtml': '<p>Добавить фильтр по филиам в отчет ексель</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      },
      {
        'id': '666a2d5e78820c3b000d7fa2',
        'text': 'Добавить фильтр в табель',
        'textHtml': '<p>Добавить фильтр в табель</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 2,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:43.798+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-90',
    'id': '6616c3ad3f172c2df073e633',
    'key': 'DEVELOPMENT-90',
    'version': 19,
    'lastCommentUpdatedAt': '2024-06-05T22:24:36.549+0000',
    'summary': 'Штрафы ОКС. Сдельные бригады',
    'statusStartTime': '2025-01-15T06:15:43.504+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 0,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![Изображение WhatsApp 2024-04-10 в 17.32.50_3eb8051d.jpg](/ajax/v2/attachments/194?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-04-10T16:51:56.099+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'checklistItems': [
      {
        'id': '6660e59ec63a576547fd478b',
        'text': 'Удаление и добавление файлов по связке с претензиями',
        'textHtml': '<p>Удаление и добавление файлов по связке с претензиями</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:43.504+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-88',
    'id': '660fc75783e3e925ff2c3d41',
    'key': 'DEVELOPMENT-88',
    'version': 11,
    'lastCommentUpdatedAt': '2024-05-14T08:14:03.092+0000',
    'summary': 'Штрафы ОТ',
    'statusStartTime': '2025-01-15T06:15:43.424+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-04-05T09:41:42.163+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:43.424+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-102',
    'id': '6656f968f072c8394b8b72ae',
    'key': 'DEVELOPMENT-102',
    'version': 17,
    'summary': 'Доработка.  Штрафы ОТ. Список нарушений с величиной штрафа\n',
    'statusStartTime': '2025-01-15T06:15:43.331+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 3,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-05-29T09:46:16.503+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'checklistItems': [
      {
        'id': '6656f99a55d4f968f9e1a82d',
        'text': 'Открыть для просмотра',
        'textHtml': '<p>Открыть для просмотра</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '6656f9a1c56a7e1d9c631b42',
        'text': 'Сразу подгружать',
        'textHtml': '<p>Сразу подгружать</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '6656f9b3c56a7e1d9c631b4b',
        'text': 'Редактировать по паролю',
        'textHtml': '<p>Редактировать по паролю</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 3,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:43.331+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-20',
    'id': '6577fcf73662622a984b7f39',
    'key': 'DEVELOPMENT-20',
    'version': 20,
    'lastCommentUpdatedAt': '2023-12-12T13:29:09.724+0000',
    'summary': 'Баг с простановкой факта',
    'statusStartTime': '2025-01-15T06:15:43.235+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-12-12T06:25:58.820+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 6,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:43.234+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'parent': {
      'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-2',
      'id': '655f25dd5c93d16f5d1f9750',
      'key': 'DEVELOPMENT-2',
      'display': 'Автоматическая простановка времени сотрудникам'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-4',
    'id': '655f6559cb804d3fde37353b',
    'key': 'DEVELOPMENT-4',
    'version': 15,
    'summary': 'Автоматическая простановка без учета плана',
    'statusStartTime': '2025-01-15T06:15:43.153+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 1,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-11-23T14:44:41.636+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'checklistItems': [
      {
        'id': '6565ff3c566b152822acbd67',
        'text': 'Нужно при создании на основании МГ сразу создавать 2 записи, разделяя на "до обеда" и "после обеда"',
        'textHtml': '<p>Нужно при создании на основании МГ сразу создавать 2 записи, разделяя на "до обеда" и "после обеда"</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      },
      {
        'id': '656606818db2dd5ee2d33326',
        'text': 'Создание ночной смены',
        'textHtml': '<p>Создание ночной смены</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 2,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:43.153+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'parent': {
      'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-2',
      'id': '655f25dd5c93d16f5d1f9750',
      'key': 'DEVELOPMENT-2',
      'display': 'Автоматическая простановка времени сотрудникам'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-129',
    'id': '66ffdd5ac168834cf51dca68',
    'key': 'DEVELOPMENT-129',
    'version': 28,
    'lastCommentUpdatedAt': '2024-11-14T08:51:34.006+0000',
    'summary': 'Распределение Фильтруем людей и их ЗП по фирмам.',
    'statusStartTime': '2025-01-15T06:15:43.081+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![image.png](/ajax/v2/attachments/237?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-10-04T12:19:38.276+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 4,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:43.081+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-65',
    'id': '65dda3382ebae944dd4eb646',
    'key': 'DEVELOPMENT-65',
    'version': 9,
    'summary': 'Опоздание. Фильтр по подразделению и периоду.',
    'statusStartTime': '2025-01-15T06:15:43.002+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-02-27T08:54:15.920+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:43.002+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-125',
    'id': '66ec71ca2f8e971c467029e1',
    'key': 'DEVELOPMENT-125',
    'version': 15,
    'lastCommentUpdatedAt': '2024-09-19T19:47:40.629+0000',
    'summary': 'График ключевых событий',
    'statusStartTime': '2025-01-15T06:15:42.921+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![Изображение WhatsApp 2024-09-19 в 12.00.45_e1abecd2.jpg](/ajax/v2/attachments/228?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-09-19T18:47:38.288+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 3,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:42.920+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-91',
    'id': '662a580bc963856661072288',
    'key': 'DEVELOPMENT-91',
    'version': 19,
    'lastCommentUpdatedAt': '2024-05-15T20:06:30.407+0000',
    'summary': 'Отчет наемная техника. Ед. изм и количество',
    'statusStartTime': '2025-01-15T06:15:42.839+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 1,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![Изображение WhatsApp 2024-04-25 в 16.15.49_46b96094.jpg](/ajax/v2/attachments/195?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-04-25T13:18:01.316+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 2,
    'checklistItems': [
      {
        'id': '66476cd2303d40001f56e031',
        'text': 'объединять по ссылке на план а не по комментарию',
        'textHtml': '<p>объединять по ссылке на план а не по комментарию</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:42.839+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-50',
    'id': '65b362288e9e4d648be33178',
    'key': 'DEVELOPMENT-50',
    'version': 17,
    'lastCommentUpdatedAt': '2024-01-26T15:06:36.762+0000',
    'summary': 'Сделать отчет "кто не пришел"',
    'statusStartTime': '2025-01-15T06:15:42.761+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'выбирается дата, дата автоматом текущая\n\nПеречень ФИО кто не пришел (из МГ).\n\nМожно не делать отдельное диалоговое\n\n![image.png](/ajax/v2/attachments/142?inline=true =400x)\n\n”кто не пришел”',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-01-26T07:41:28.138+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:42.760+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-48',
    'id': '65b35ecaad0b0435791d96ad',
    'key': 'DEVELOPMENT-48',
    'version': 12,
    'summary': 'Просмотр ЕЕП (Ед.изм в наемной технике)',
    'statusStartTime': '2025-01-15T06:15:42.681+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![image.png](/ajax/v2/attachments/141?inline=true =400x) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-01-26T07:27:05.221+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:42.681+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-36',
    'id': '658d04a21032137d7eebfbc8',
    'key': 'DEVELOPMENT-36',
    'version': 12,
    'lastCommentUpdatedAt': '2024-01-22T16:31:49.382+0000',
    'summary': 'Автоматическое вычитание штрафов',
    'statusStartTime': '2025-01-15T06:15:42.604+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-12-28T05:16:18.436+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      },
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
      'id': '8000000000000005',
      'display': 'Алексей Калиничев',
      'cloudUid': 'ajeuod5beum5ki4v1iop',
      'passportUid': 1918030851
    },
    'commentWithoutExternalMessageCount': 2,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:42.604+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-101',
    'id': '6655b039c56a7e1d9c6241dd',
    'key': 'DEVELOPMENT-101',
    'version': 19,
    'lastCommentUpdatedAt': '2024-05-30T12:01:01.512+0000',
    'summary': 'Согласования',
    'statusStartTime': '2025-01-15T06:15:42.525+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 3,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![Изображение WhatsApp 2024-05-28 в 10.50.19_37545fe1.jpg](/ajax/v2/attachments/205?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-05-28T10:21:45.422+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 2,
    'checklistItems': [
      {
        'id': '6655b04df072c8394b8a892f',
        'text': '1. Порядок кнопок поправить',
        'textHtml': '<ol>\n<li>Порядок кнопок поправить</li>\n</ol>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '6655b04df072c8394b8a8930',
        'text': '2. Добавить кнопку "АЛК +"',
        'textHtml': '<ol start="2">\n<li>Добавить кнопку "АЛК +"</li>\n</ol>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '6655b05555d4f968f9e0ccac',
        'text': 'Добавить список опозданий',
        'textHtml': '<p>Добавить список опозданий</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 3,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:42.525+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-116',
    'id': '66cd897c74aa6222de549065',
    'key': 'DEVELOPMENT-116',
    'version': 28,
    'lastCommentUpdatedAt': '2024-08-31T07:41:31.091+0000',
    'summary': 'Перефиксация ЗП',
    'statusStartTime': '2025-01-15T06:15:42.450+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'Еще один список "К повторной фиксации":\nВ этом раскрывающемся списке будет своя кнопка: "Перефиксировать"\n\nВ этот список попадают те, у которых значение "К выдаче" разнятся между зафиксированной и засчетной ЗП.\n\nВ данном списке по умолчанию к повторной фиксации выбраны все, но можно некоторых исключать из этого списка (убирать галочку в списке), и при нажатии на кнопку "Перефиксировать" произойдет удаление старых зафиксированных данных и создание новых\n\n ![Изображение WhatsApp 2024-08-28 в 16.50.17_052046a8.jpg](/ajax/v2/attachments/218?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-08-27T08:08:24.289+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:42.450+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-124',
    'id': '66eb12fec51ca1064aae4efe',
    'key': 'DEVELOPMENT-124',
    'version': 11,
    'summary': 'Ближайшие платежи',
    'statusStartTime': '2025-01-15T06:15:42.375+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'Галочка "Выполнена", Исчезают только после подтверждаения. Аббасова',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-09-18T17:50:53.997+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:42.374+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-56',
    'id': '65c3fafc31e60949a07c25f3',
    'key': 'DEVELOPMENT-56',
    'version': 11,
    'summary': 'Фильтр по оплате',
    'statusStartTime': '2025-01-15T06:15:42.296+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' раз этот акт не отмечен, значит по нему не делался акт вып работ, а значит Саман даже не знает что должен нам денег\n\nнужен отчет либо в этом очете фильтр "неоплаченные" ну или "неотмеченные"\n\nчтобы я мог быстро смотреть на что не сделаны акты и оперативно дать команду их сделать',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-02-07T21:49:48.240+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:42.296+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-133',
    'id': '6726821174adf4586b938716',
    'key': 'DEVELOPMENT-133',
    'version': 13,
    'summary': 'Сравнение ставок. Баг. ',
    'statusStartTime': '2025-01-15T06:15:42.213+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![Изображение WhatsApp 2024-11-02 в 18.24.55_929144a2.jpg](/ajax/v2/attachments/245?inline=true =x439)нет данных',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/1',
      'id': '1',
      'key': 'bug',
      'display': 'Ошибка'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-11-02T19:48:32.201+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:42.213+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-37',
    'id': '658d54371032137d7eec2441',
    'key': 'DEVELOPMENT-37',
    'version': 12,
    'lastCommentUpdatedAt': '2024-01-08T20:26:08.251+0000',
    'summary': 'Отображение ночной смены для техники в простановке времени (старая форма)',
    'statusStartTime': '2025-01-15T06:15:42.141+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-12-28T10:55:51.552+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:42.141+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-60',
    'id': '65d5b51077cc0c77aa037777',
    'key': 'DEVELOPMENT-60',
    'version': 41,
    'summary': 'Штрафы ОКС',
    'statusStartTime': '2025-01-15T06:15:42.063+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 7,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': '   в окс будет работать жвс\n\nв от будет работать терехов\n\nштрафы УМ - работать будет в нем елаев и жвс и возможно пиньковский \n\n только нужно придумать короткие названия штрафам\n\nчто было легко их из списка выбирать\n\nа при наведении на штраф всплывала подсказка например с полным описанием штрафа\n\n ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-02-21T08:32:15.199+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'checklistItems': [
      {
        'id': '660fc7a04a35537bf8c492ff',
        'text': 'Форма редактирования',
        'textHtml': '<p>Форма редактирования</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '660fc7a483e3e925ff2c3ee4',
        'text': 'Форма списка',
        'textHtml': '<p>Форма списка</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '660fc7a982c36d3cec5c75f5',
        'text': 'Форма создания',
        'textHtml': '<p>Форма создания</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '660fcc194a35537bf8c499a3',
        'text': 'Удаление группы нарушений (при удалении проверять есть ли нарушения с такой группой)',
        'textHtml': '<p>Удаление группы нарушений (при удалении проверять есть ли нарушения с такой группой)</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      },
      {
        'id': '660fd7ae4a35537bf8c49b85',
        'text': 'Удаление файлов на сервере и удаление ссылки на них, у всех связанных штрафов',
        'textHtml': '<p>Удаление файлов на сервере и удаление ссылки на них, у всех связанных штрафов</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '660fd7c84a35537bf8c49be0',
        'text': 'Добавление файла и ссылки на него ко всем связанным записям',
        'textHtml': '<p>Добавление файла и ссылки на него ко всем связанным записям</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '6634f4e30c11477a836da3b3',
        'text': 'Удаление файлов при отвязывании файлов в форме редактирования штрафа ОКС',
        'textHtml': '<p>Удаление файлов при отвязывании файлов в форме редактирования штрафа ОКС</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '66421f66f036f53d0630ceef',
        'text': 'Удаление файлов при отвязывании файлов в форме создания штрафа ОКС',
        'textHtml': '<p>Удаление файлов при отвязывании файлов в форме создания штрафа ОКС</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 8,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:42.062+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': true,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-84',
    'id': '65fac238c73f091011064f45',
    'key': 'DEVELOPMENT-84',
    'version': 15,
    'lastCommentUpdatedAt': '2024-03-27T14:28:07.708+0000',
    'summary': '"Текущее распределение" на следующий день и для механизации',
    'statusStartTime': '2025-01-15T06:15:41.987+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![image.png](/ajax/v2/attachments/182?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-03-20T11:02:16.158+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:41.986+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-2',
    'id': '655f25dd5c93d16f5d1f9750',
    'key': 'DEVELOPMENT-2',
    'version': 62,
    'pendingReplyFrom': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      }
    ],
    'statusStartTime': '2025-01-15T06:15:41.905+0000',
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 5,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'createdAt': '2023-11-23T10:13:49.326+0000',
    'checklistTotal': 5,
    'commentWithExternalMessageCount': 0,
    'updatedAt': '2025-01-15T06:15:41.905+0000',
    'lastCommentUpdatedAt': '2023-12-13T17:42:50.992+0000',
    'summary': 'Автоматическая простановка времени сотрудникам',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      },
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 2,
    'checklistItems': [
      {
        'id': '655fbecf5c93d16f5d200698',
        'text': 'Добавить поле создано автоматически.',
        'textHtml': '<p>Добавить поле создано автоматически.</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '655fbed2cb804d3fde37773b',
        'text': 'Менять его на false, если была изменена вручную, хотя бы одно поле',
        'textHtml': '<p>Менять его на false, если была изменена вручную, хотя бы одно поле</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '6566066b566b152822acc4fe',
        'text': 'Создание ночной смены в ЕП. Если в МГ ночная смена, то планы не учитывать',
        'textHtml': '<p>Создание ночной смены в ЕП. Если в МГ ночная смена, то планы не учитывать</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '657203efdf22b8765e0f98cf',
        'text': 'Автоматическая простановка для механизации',
        'textHtml': '<p>Автоматическая простановка для механизации</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '6579ec834c9e221333b0c52d',
        'text': 'Обсудить взаимодействие по поводу ТЗ',
        'textHtml': '<p>Обсудить взаимодействие по поводу ТЗ</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      }
    ],
    'votes': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'parent': {
      'self': 'https://api.tracker.yandex.net/v2/issues/STRUCTURE-8',
      'id': '655f653ad9999e60375ae916',
      'key': 'STRUCTURE-8',
      'display': 'Автоматическая простановка времени сотрудникам'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-134',
    'id': '673471d55ddef77be988f7e7',
    'key': 'DEVELOPMENT-134',
    'version': 14,
    'lastCommentUpdatedAt': '2024-11-13T09:54:34.192+0000',
    'summary': 'Реестр ИРД',
    'statusStartTime': '2025-01-15T06:15:41.824+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'возможность сделать дополнительную строчку',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-11-13T09:31:01.344+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 2,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:41.824+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-132',
    'id': '6724ed2c78ac07101e330f86',
    'key': 'DEVELOPMENT-132',
    'version': 10,
    'summary': 'Доработка смет',
    'statusStartTime': '2025-01-15T06:15:41.736+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 0,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-11-01T15:01:00.257+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'checklistItems': [
      {
        'id': '6724ed5aa8072d0bcac6bcdf',
        'text': 'Доработать форму создания (чтобы не добавлялась смета в список если не соответствует проекту) - лист смет',
        'textHtml': '<p>Доработать форму создания (чтобы не добавлялась смета в список если не соответствует проекту) - лист смет</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:41.736+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-42',
    'id': '659ce59bf87ed72bbdd177ae',
    'key': 'DEVELOPMENT-42',
    'version': 15,
    'lastCommentUpdatedAt': '2024-01-09T08:24:07.811+0000',
    'summary': 'Баг с автоматической простановкой',
    'statusStartTime': '2025-01-15T06:15:41.656+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': '  ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-01-09T06:20:11.545+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 2,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:41.656+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-135',
    'id': '6734769c3433a02c8d0e62a3',
    'key': 'DEVELOPMENT-135',
    'version': 13,
    'lastCommentUpdatedAt': '2024-11-13T09:54:49.020+0000',
    'summary': 'Реестр ГАСН',
    'statusStartTime': '2025-01-15T06:15:41.580+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'возможность сделать дополнительную строчку',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-11-13T09:51:24.641+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:41.580+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-14',
    'id': '6571af4c3b170d2b5d279349',
    'key': 'DEVELOPMENT-14',
    'version': 22,
    'pendingReplyFrom': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      }
    ],
    'statusStartTime': '2025-01-15T06:15:41.500+0000',
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 1,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'можно показывать в Табеле или в прочих местах, что человек работал в обед и кол-во часов. Просто смотреть его пересечение с графиком работы, в т.ч. графиком обеда',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'createdAt': '2023-12-07T11:41:00.790+0000',
    'checklistTotal': 2,
    'commentWithExternalMessageCount': 0,
    'updatedAt': '2025-01-15T06:15:41.500+0000',
    'lastCommentUpdatedAt': '2023-12-11T18:49:13.738+0000',
    'summary': 'Показывать работу в обед',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      },
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 3,
    'checklistItems': [
      {
        'id': '6577559d4c9e221333aeb965',
        'text': 'В новой форме',
        'textHtml': '<p>В новой форме</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '657755a54c9e221333aeb967',
        'text': 'В старой форме',
        'textHtml': '<p>В старой форме</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      }
    ],
    'votes': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-123',
    'id': '66e1b678eacdf9134af0a07d',
    'key': 'DEVELOPMENT-123',
    'version': 16,
    'lastCommentUpdatedAt': '2024-10-07T23:21:33.647+0000',
    'summary': '"Чек лист Отчеты для директора" потом придумаем нормальное название',
    'statusStartTime': '2025-01-15T06:15:41.424+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'поставь еще в план "Чек лист Отчеты для директора" потом придумаем нормальное название (Механизация акты выпущены, акты оплачены, затраты распределены и тд)',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-09-11T15:25:43.921+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 2,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:41.424+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-7',
    'id': '655fc3cacb804d3fde377792',
    'key': 'DEVELOPMENT-7',
    'version': 23,
    'lastCommentUpdatedAt': '2023-12-06T11:55:35.157+0000',
    'pendingReplyFrom': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      }
    ],
    'summary': 'Пересмотреть логику работы  с обедом.',
    'statusStartTime': '2025-01-15T06:15:41.338+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![image.png](/ajax/v2/attachments/6?inline=true =400x) \n\nВ связи с тем, что программа проставляет автоматически время по планам:\n\nЕсть ли смысл вообще в понятии смена? Есть ли смысл записях захватывающих несколько дней (ночные)?\n\nПомечать, что смена ночная, и как-то ее учитывать в ЗП - это нужно и можно. А вот значение "переходящая на следующий день" не знаю нужна или нет.\n\nВопрос связан с автоматической простановкой: если мы хотим, чтобы ставилось автоматически, то тогда нужно ночные смены так же планировать, что они ночные, чтобы программа их автоматически проставляла\n\nЕсли важно, чтобы несколько записей относились к одной смене, то можно в записи указывать:\n\n* день 20.11\n* время начала 00:00 21.11,\n* время окончания 08:00 21:11.\n\nИ получается смена 20.11, а время захватывает от 21.11\n\nИ вообще от автоматического вычета обеда стоит уйти.\n\nРанее была проблема в том, что людям будет ленно проставлять две записи: с 8:00 до 12:00 и с 13:00 до 17:00.\nСейчас программа сама разбивает смену на сегменты(периоды), и соответственно обед будет вычитаться\n\nИ если все это учитывать, то меняется форма планирования, там увеличивается кол-во часов, и округления уже не до часа, а иные (допустим до 5, 10 или 30 минут)\n\nПолучается нужно исходит из бухгалтероского расчета ЗП\\+\n\n  ![image.png](/ajax/v2/attachments/8?inline=true =400x)  \n\n ![image.png](/ajax/v2/attachments/9?inline=true =400x) \n\nМожет не вычитать обед если ночная смена?',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'tags': [
      'Расстановка'
    ],
    'createdAt': '2023-11-23T21:27:38.437+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      },
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 7,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:41.337+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'parent': {
      'self': 'https://api.tracker.yandex.net/v2/issues/STRUCTURE-2',
      'id': '655f627d5c93d16f5d1fc850',
      'key': 'STRUCTURE-2',
      'display': 'Расстановка'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-43',
    'id': '659fcb18046af06ac2131e59',
    'key': 'DEVELOPMENT-43',
    'version': 11,
    'lastCommentUpdatedAt': '2024-01-24T14:40:13.766+0000',
    'summary': 'Согласование переработки для сторожей',
    'statusStartTime': '2025-01-15T06:15:41.256+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-01-11T11:03:52.212+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      },
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
      'id': '8000000000000005',
      'display': 'Алексей Калиничев',
      'cloudUid': 'ajeuod5beum5ki4v1iop',
      'passportUid': 1918030851
    },
    'commentWithoutExternalMessageCount': 2,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:41.256+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-128',
    'id': '66fac5fbf54c7f68949713e7',
    'key': 'DEVELOPMENT-128',
    'version': 18,
    'lastCommentUpdatedAt': '2024-10-15T16:43:20.654+0000',
    'summary': 'ЗП Отчет. БАГ. Отображение каких-то столбцов',
    'statusStartTime': '2025-01-15T06:15:41.182+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': '    \n\n ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-09-30T15:38:35.122+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 5,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:41.182+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-39',
    'id': '659c4304a790996c0506589d',
    'key': 'DEVELOPMENT-39',
    'version': 19,
    'lastCommentUpdatedAt': '2024-01-15T15:45:51.017+0000',
    'summary': 'Добавить ночную смену в форму создания собственной техники',
    'statusStartTime': '2025-01-15T06:15:41.104+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 1,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![image.png](/ajax/v2/attachments/87?inline=true =x400) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-01-08T18:46:28.498+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      },
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 4,
    'checklistItems': [
      {
        'id': '65a552c2dd297c15691eee3b',
        'text': 'Поправить в старой форме добавление нескольких записей',
        'textHtml': '<p>Поправить в старой форме добавление нескольких записей</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:41.104+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-45',
    'id': '65a03c609a0bde63a56f0e52',
    'key': 'DEVELOPMENT-45',
    'version': 9,
    'summary': 'Не проставлять фактическое время автоматически для объекта на ремонте.',
    'statusStartTime': '2025-01-15T06:15:41.029+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-01-11T19:07:12.582+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:41.029+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-149',
    'id': '67502aecd108be75555113f8',
    'key': 'DEVELOPMENT-149',
    'version': 18,
    'lastCommentUpdatedAt': '2024-12-05T15:08:43.120+0000',
    'summary': 'Убрать разряды',
    'statusStartTime': '2025-01-15T06:15:40.949+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'Убрать разряды из ежедневного плана\n\nУбрать разряды из текущего распределения\n\nУбрать разряды из табеля\n\n ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-12-04T10:11:56.467+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 3,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:40.948+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-16',
    'id': '6571afc9df22b8765e0f519f',
    'key': 'DEVELOPMENT-16',
    'version': 11,
    'lastCommentUpdatedAt': '2023-12-07T17:41:35.244+0000',
    'summary': 'Создать 2 записи. Без обеда',
    'statusStartTime': '2025-01-15T06:15:40.864+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-12-07T11:43:04.045+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:40.864+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-147',
    'id': '674dd9578f62ea704f03baa2',
    'key': 'DEVELOPMENT-147',
    'version': 12,
    'summary': 'Ближайшие ДР с подарками. Фильтр списка по галке',
    'statusStartTime': '2025-01-15T06:15:40.779+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' \n\n \n\nего тут же не должно быть так галочка не стоит на ДР',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-12-02T15:59:19.732+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:40.778+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-54',
    'id': '65b8a37cf1e154320ab82203',
    'key': 'DEVELOPMENT-54',
    'version': 14,
    'summary': 'Баг штрафы ЗП',
    'statusStartTime': '2025-01-15T06:15:40.695+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 0,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': '',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-01-30T07:21:32.920+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'checklistItems': [
      {
        'id': '65b8a3d70f38125745124cfa',
        'text': 'Показываются штрафы за другие месяцы',
        'textHtml': '<p>Показываются штрафы за другие месяцы</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      },
      {
        'id': '65b8a3eaf1e154320ab8222c',
        'text': 'При обновлении строки пропадает инфа о штрафах',
        'textHtml': '<p>При обновлении строки пропадает инфа о штрафах</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 2,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:40.695+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-64',
    'id': '65dd9f306641d91b7f624d19',
    'key': 'DEVELOPMENT-64',
    'version': 10,
    'lastCommentUpdatedAt': '2024-02-27T08:37:23.376+0000',
    'summary': 'Баг в отображении ДР. Собственных сотрудников.',
    'statusStartTime': '2025-01-15T06:15:40.615+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-02-27T08:37:04.357+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:40.615+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-51',
    'id': '65b3cd538e9e4d648be383d3',
    'key': 'DEVELOPMENT-51',
    'version': 14,
    'summary': 'План-факт отпусков',
    'statusStartTime': '2025-01-15T06:15:40.511+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'Просмотр не ограничен\n\nПароль на удаление и создание (10 штук)\n\nУтверждения нет. С согласованиями не связаны.',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-01-26T15:18:40.174+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:40.511+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-41',
    'id': '659c5abba790996c05065bf5',
    'key': 'DEVELOPMENT-41',
    'version': 10,
    'lastCommentUpdatedAt': '2024-01-10T08:03:12.008+0000',
    'summary': 'Доработка серверной части при указании ночной смены для собственной техники',
    'statusStartTime': '2025-01-15T06:15:40.433+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-01-08T20:27:39.174+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:40.433+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-106',
    'id': '667be422f283067bf3d0274a',
    'key': 'DEVELOPMENT-106',
    'version': 11,
    'summary': 'Пароль на ЗП',
    'statusStartTime': '2025-01-15T06:15:40.356+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![image.png](/ajax/v2/attachments/212?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-06-26T09:49:22.313+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:40.356+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-10',
    'id': '6565fd728db2dd5ee2d32ee0',
    'key': 'DEVELOPMENT-10',
    'version': 15,
    'lastCommentUpdatedAt': '2023-11-29T13:53:39.587+0000',
    'summary': 'Расчет и отображение суммы часов за день',
    'statusStartTime': '2025-01-15T06:15:40.268+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 1,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-11-28T14:47:14.257+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'checklistItems': [
      {
        'id': '656742190c9c856d348f3cec',
        'text': 'В новой форме списка',
        'textHtml': '<p>В новой форме списка</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:40.267+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-34',
    'id': '65895473bbff181ae4a3cace',
    'key': 'DEVELOPMENT-34',
    'version': 12,
    'summary': 'Баг с округлением',
    'statusStartTime': '2025-01-15T06:15:40.170+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' \\[08:34, 25.12.2023\\] Алексей Калиничев, Ген. Дир. Смс: почему то не округлилось\n\\[08:35, 25.12.2023\\] dmitriyskrill: План же до 17:00?\n\\[08:36, 25.12.2023\\] Алексей Калиничев, Ген. Дир. Смс: ну скорее всего да\n\\[08:36, 25.12.2023\\] Алексей Калиничев, Ген. Дир. Смс: а округление при этом не срабатывает что ли?\n\\[08:37, 25.12.2023\\] dmitriyskrill: Сейчас уточню\n\\[08:56, 25.12.2023\\] dmitriyskrill: хм...Вроде должен округлиться\n\\[08:56, 25.12.2023\\] dmitriyskrill: Буду смотреть сейчас детальнее',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/1',
      'id': '1',
      'key': 'bug',
      'display': 'Ошибка'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-12-25T10:07:47.670+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:40.170+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-77',
    'id': '65e04619ce4752412cb598c8',
    'key': 'DEVELOPMENT-77',
    'version': 19,
    'summary': 'Согласование опозданий',
    'statusStartTime': '2025-01-15T06:15:40.092+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 5,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-02-29T08:53:45.288+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'checklistItems': [
      {
        'id': '65e0462f2ebae944dd4ff24c',
        'text': 'Форма создания',
        'textHtml': '<p>Форма создания</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '65e04633ce4752412cb598d4',
        'text': 'Форма списка',
        'textHtml': '<p>Форма списка</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '65e04639ce4752412cb598d9',
        'text': 'Удаление',
        'textHtml': '<p>Удаление</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '65e046402ebae944dd4ff254',
        'text': 'Подтверждение',
        'textHtml': '<p>Подтверждение</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '65e046502ebae944dd4ff25d',
        'text': 'Автоматическое удаление штрафа за опоздание при утверждении',
        'textHtml': '<p>Автоматическое удаление штрафа за опоздание при утверждении</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 5,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:40.092+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-119',
    'id': '66d2c8357418b97bb797a499',
    'key': 'DEVELOPMENT-119',
    'version': 12,
    'summary': 'Категория ЕП в отдел',
    'statusStartTime': '2025-01-15T06:15:40.013+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![Изображение WhatsApp 2024-08-30 в 09.37.05_ca4435a6.jpg](/ajax/v2/attachments/222?inline=true)  ![image.png](/ajax/v2/attachments/223?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-08-31T07:37:25.281+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:40.013+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-148',
    'id': '674f8b0fa0724765a9525bdb',
    'key': 'DEVELOPMENT-148',
    'version': 19,
    'summary': 'Категории организаций для подарков',
    'statusStartTime': '2025-01-15T06:15:39.933+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 0,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' \n\n ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-12-03T22:49:51.490+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'checklistItems': [
      {
        'id': '67506da6cfd7a36d79302423',
        'text': 'Проверить работу обязательности заполненения в оригинально бд',
        'textHtml': '<p data-line="0" class="line">Проверить работу обязательности заполненения в оригинально бд</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:39.933+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-152',
    'id': '675adf214610f27fa48092ba',
    'key': 'DEVELOPMENT-152',
    'version': 11,
    'summary': 'Проекты список. Заказчик',
    'statusStartTime': '2025-01-15T06:15:39.854+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 0,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-12-12T13:03:29.913+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'checklistItems': [
      {
        'id': '675adf3c6a0ace12a778092c',
        'text': 'Доработать Фильтры',
        'textHtml': '<p data-line="0" class="line">Доработать Фильтры</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:39.854+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-126',
    'id': '66ec72570c4412198a42af6d',
    'key': 'DEVELOPMENT-126',
    'version': 13,
    'lastCommentUpdatedAt': '2024-10-30T09:19:54.259+0000',
    'summary': 'Реестр смет',
    'statusStartTime': '2025-01-15T06:15:39.769+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![image.png](/ajax/v2/attachments/231?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-09-19T18:49:59.251+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:39.769+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-6',
    'id': '655fc1ff5c93d16f5d2006ac',
    'key': 'DEVELOPMENT-6',
    'version': 11,
    'summary': 'Отладить отображение ночной смены',
    'statusStartTime': '2025-01-15T06:15:39.675+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 2,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-11-23T21:19:59.279+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'checklistItems': [
      {
        'id': '6565fff98db2dd5ee2d330a8',
        'text': 'В старой форме простановки времени',
        'textHtml': '<p>В старой форме простановки времени</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '6566000c566b152822acc114',
        'text': 'В новой форме простановки времени',
        'textHtml': '<p>В новой форме простановки времени</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 2,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:39.675+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'parent': {
      'self': 'https://api.tracker.yandex.net/v2/issues/STRUCTURE-7',
      'id': '655f64bcd9999e60375ae907',
      'key': 'STRUCTURE-7',
      'display': 'Простановка времени. Список фактов сотрудников | v. 2'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-19',
    'id': '6572f47167243706905a9aa6',
    'key': 'DEVELOPMENT-19',
    'version': 17,
    'lastCommentUpdatedAt': '2023-12-12T10:40:25.040+0000',
    'pendingReplyFrom': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      }
    ],
    'summary': 'Снять ограничения с привязки факта техники к плану',
    'statusStartTime': '2025-01-15T06:15:39.588+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![image.png](/ajax/v2/attachments/41?inline=true =400x) \n\n ![image.png](/ajax/v2/attachments/42?inline=true =400x) \n\n ![image.png](/ajax/v2/attachments/43?inline=true =400x) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'previousStatusLastAssignee': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'createdAt': '2023-12-08T10:48:17.312+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      },
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'assignee': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:39.588+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-83',
    'id': '65f8068a0fa3d04d28715547',
    'key': 'DEVELOPMENT-83',
    'version': 13,
    'lastCommentUpdatedAt': '2024-03-19T11:47:53.291+0000',
    'summary': 'Комментарии в отчете по собственной технике',
    'statusStartTime': '2025-01-15T06:15:39.511+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': '\\[18.03.2024 10:41\\] : Подтягивается комментарий из плана в каждую запись факта работы собственной техники\n\\[18.03.2024 10:41\\] : Я пока запишу это в очередь, но нужно будет переделать логику показа комментария.\n ![Изображение WhatsApp 2024-03-18 в 10.40.37_86a95071.jpg](/ajax/v2/attachments/178?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-03-18T09:16:57.399+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:39.511+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-62',
    'id': '65d5c6e806a45344e5db8492',
    'key': 'DEVELOPMENT-62',
    'version': 12,
    'lastCommentUpdatedAt': '2024-03-20T13:34:33.787+0000',
    'summary': 'Штраф за пьянку',
    'statusStartTime': '2025-01-15T06:15:39.428+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'В путевой лист сотрудника заносится информация о том, что он пришел пьяный. И в момент простановки создается штраф с инфой о том почему проставилась (дата, и кто проставил)\n\nТ.к. сотрудника отстраняют от работы, то ему нужно указывать статус. И тут на выбор проставляющего: поставить “ОЗ” или “ПР”. Если проставили ПР, то дополнительно прилетит штраф 4000 р.\n\nв табеле и ЗП ( и в Excel форме) графически выделить дни, где человека подловили в нетрезвом виде.',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-02-21T09:48:24.633+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:39.428+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-79',
    'id': '65e99b0ffe9a7536c84cccaa',
    'key': 'DEVELOPMENT-79',
    'version': 14,
    'lastCommentUpdatedAt': '2024-03-14T17:00:50.997+0000',
    'summary': 'Диалоговое окно редактирования факта собственной техники',
    'statusStartTime': '2025-01-15T06:15:39.341+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 1,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-03-07T10:46:39.826+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 2,
    'checklistItems': [
      {
        'id': '65e99b5f205f6c6194568faf',
        'text': 'Проблема "Время начала" может быть позднее "Времени окончания". Проверить как на сервере, так и на клиенте.',
        'textHtml': '<p>Проблема "Время начала" может быть позднее "Времени окончания". Проверить как на сервере, так и на клиенте.</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      },
      {
        'id': '65e99b75fe9a7536c84cccb7',
        'text': 'Проблема со сменой объекта при изменении',
        'textHtml': '<p>Проблема со сменой объекта при изменении</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 2,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:39.340+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-93',
    'id': '662caaef82abbc41cfa0748e',
    'key': 'DEVELOPMENT-93',
    'version': 13,
    'summary': 'Объединить столбцы со штрафами в ЗП отчет. Сайт и Excel',
    'statusStartTime': '2025-01-15T06:15:39.261+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': '![image.png](/ajax/v2/attachments/200?inline=true)\n\n ![image.png](/ajax/v2/attachments/201?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-04-27T07:36:15.472+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:39.260+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-138',
    'id': '673482e3477a066bfe2883b9',
    'key': 'DEVELOPMENT-138',
    'version': 18,
    'summary': 'Шахматка',
    'statusStartTime': '2025-01-15T06:15:39.182+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'Справа от комиссии банку надо ещё добавить столбец "Банк"',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-11-13T10:43:47.807+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:39.182+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-136',
    'id': '6734774e477a066bfe287790',
    'key': 'DEVELOPMENT-136',
    'version': 10,
    'summary': 'Реестр Презентаций',
    'statusStartTime': '2025-01-15T06:15:39.077+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-11-13T09:54:22.351+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:39.077+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-28',
    'id': '65807fea5a77677679e3b569',
    'key': 'DEVELOPMENT-28',
    'version': 10,
    'summary': 'План-Факт-Рапорт-Табель (объединение комментариев)',
    'statusStartTime': '2025-01-15T06:15:39.002+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-12-18T17:22:50.157+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:39.001+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-131',
    'id': '6724df5b78ac07101e32f0e5',
    'key': 'DEVELOPMENT-131',
    'version': 9,
    'summary': 'Добавить пароль на отчеты своя техника и наемная техника',
    'statusStartTime': '2025-01-15T06:15:38.920+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-11-01T14:02:03.893+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:38.920+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-32',
    'id': '658919e7d14e6c28fac4595f',
    'key': 'DEVELOPMENT-32',
    'version': 13,
    'summary': 'ТКС. Убрать "я_..."',
    'statusStartTime': '2025-01-15T06:15:38.824+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-12-25T05:57:59.322+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:38.824+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-61',
    'id': '65d5c6d606a45344e5db8485',
    'key': 'DEVELOPMENT-61',
    'version': 15,
    'lastCommentUpdatedAt': '2024-03-19T09:28:08.568+0000',
    'summary': 'Штрафы за ПР',
    'statusStartTime': '2025-01-15T06:15:38.745+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-02-21T09:48:06.103+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:38.744+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-30',
    'id': '65808f195a77677679e3bf8f',
    'key': 'DEVELOPMENT-30',
    'version': 37,
    'lastCommentUpdatedAt': '2024-01-08T10:46:19.244+0000',
    'pendingReplyFrom': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      }
    ],
    'summary': 'Автоматическая простановка Механизации',
    'statusStartTime': '2025-01-15T06:15:38.655+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 5,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-12-18T18:27:37.634+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 6,
    'checklistItems': [
      {
        'id': '658a8d2019289e209db7f841',
        'text': 'Автоматическое создание по расписанию',
        'textHtml': '<p>Автоматическое создание по расписанию</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '658a8d359d08735dd21c8fec',
        'text': 'Уточнить для объекта "Сдача в наем"',
        'textHtml': '<p>Уточнить для объекта "Сдача в наем"</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '658a8d4e19289e209db7f90b',
        'text': 'Убирать "А" если, изменено хоть одно поле',
        'textHtml': '<p>Убирать "А" если, изменено хоть одно поле</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '658a8d749d08735dd21c8ff6',
        'text': 'Протестить ночную смену',
        'textHtml': '<p>Протестить ночную смену</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '658d420b3079a521a3801ce3',
        'text': 'Добавить опрежеление id механизации по codeId',
        'textHtml': '<p>Добавить опрежеление id механизации по codeId</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 5,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:38.655+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'parent': {
      'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-2',
      'id': '655f25dd5c93d16f5d1f9750',
      'key': 'DEVELOPMENT-2',
      'display': 'Автоматическая простановка времени сотрудникам'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-140',
    'id': '673b3a2278a463565e5784fd',
    'key': 'DEVELOPMENT-140',
    'version': 11,
    'summary': 'Скрыть отчет из 1С',
    'statusStartTime': '2025-01-15T06:15:38.574+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![Изображение WhatsApp 2024-11-18 в 15.57.23_4df1e422.jpg](/ajax/v2/attachments/260?inline=true =x600) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-11-18T12:59:13.967+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:38.574+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-74',
    'id': '65df64bc6641d91b7f631b0a',
    'key': 'DEVELOPMENT-74',
    'version': 15,
    'lastCommentUpdatedAt': '2024-03-28T22:05:36.392+0000',
    'summary': 'Премия Механика. ',
    'statusStartTime': '2025-01-15T06:15:38.493+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![Изображение WhatsApp 2024-02-28 в 14.58.51_96ffe15b.jpg](/ajax/v2/attachments/169?inline=true =x600) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-02-28T16:52:12.489+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 3,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:38.492+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-118',
    'id': '66d07b41f649bd4ab98671e7',
    'key': 'DEVELOPMENT-118',
    'version': 12,
    'lastCommentUpdatedAt': '2024-08-29T13:45:15.632+0000',
    'summary': 'ЧТО и ПТО в справочник техники',
    'statusStartTime': '2025-01-15T06:15:38.413+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![Изображение WhatsApp 2024-08-29 в 16.15.25_1be570dd.jpg](/ajax/v2/attachments/220?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-08-29T13:44:33.920+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:38.413+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-72',
    'id': '65df0d4f2ebae944dd4f5af6',
    'key': 'DEVELOPMENT-72',
    'version': 14,
    'summary': 'Зарплата. ОК и К',
    'statusStartTime': '2025-01-15T06:15:38.331+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 2,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'ОК = 350\n\nК = 700\n\nВозможно сделать так, чтобы пользователь мог управлять этой цифрой. Но не принципиально',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-02-28T10:39:11.846+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'checklistItems': [
      {
        'id': '664484638994c104b633ffe0',
        'text': 'Работать должен уже с апреля',
        'textHtml': '<p>Работать должен уже с апреля</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '664484838994c104b633fffa',
        'text': '"Суточные начислено" (старый скрыть) в место него показать новый автоматический с таким же названием',
        'textHtml': '<p>"Суточные начислено" (старый скрыть) в место него показать новый автоматический с таким же названием</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 2,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:38.330+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-114',
    'id': '66c6fe4f40d277725c8024e7',
    'key': 'DEVELOPMENT-114',
    'version': 12,
    'summary': 'Форма создания факта техники',
    'statusStartTime': '2025-01-15T06:15:38.253+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![image.png](/ajax/v2/attachments/215?inline=true)  ![Изображение WhatsApp 2024-08-21 в 11.41.24_35d1cea0.jpg](/ajax/v2/attachments/216?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-08-22T09:01:03.644+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:38.253+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-1',
    'id': '655f0a74cb804d3fde36eccd',
    'key': 'DEVELOPMENT-1',
    'version': 18,
    'summary': 'Автоматическая простановка с учетом плана',
    'statusStartTime': '2025-01-15T06:15:38.171+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 0,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': '',
    'boards': [
      {
        'id': 4,
        'name': 'development'
      },
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-11-23T08:16:52.666+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'checklistItems': [
      {
        'id': '6565fbd1566b152822acbd10',
        'text': 'Если в МГ ночная смена, то не учитывать план',
        'textHtml': '<p>Если в МГ ночная смена, то не учитывать план</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:38.171+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'parent': {
      'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-2',
      'id': '655f25dd5c93d16f5d1f9750',
      'key': 'DEVELOPMENT-2',
      'display': 'Автоматическая простановка времени сотрудникам'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-146',
    'id': '674dbfa913a2bf5c6fa9629e',
    'key': 'DEVELOPMENT-146',
    'version': 21,
    'summary': 'Люди для подарков. Доделки',
    'statusStartTime': '2025-01-15T06:15:38.096+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 2,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-12-02T14:09:44.687+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'checklistItems': [
      {
        'id': '674f0c8813a2bf5c6faa46d2',
        'text': 'Очищение и закрытие при создании',
        'textHtml': '<p data-line="0" class="line">Очищение и закрытие при создании</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '674f0cb313a2bf5c6faa46e1',
        'text': 'Уведомление о создании',
        'textHtml': '<p data-line="0" class="line">Уведомление о создании</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '67506dfd5ca15f2ddc226fe7',
        'text': 'Проверить обязательность указания сотрудника на уровне БД',
        'textHtml': '<p data-line="0" class="line">Проверить обязательность указания сотрудника на уровне БД</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 3,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:38.096+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-8',
    'id': '6564710d19f3993befa9d38b',
    'key': 'DEVELOPMENT-8',
    'version': 121,
    'pendingReplyFrom': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      }
    ],
    'statusStartTime': '2025-01-15T06:15:38.014+0000',
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 6,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': '24\\.11.2023                                                                                                                                                                                                                                                Аббасова ТА до 18:45,                                                                                                                                                                                                       Глаголев СК до 17:56 (ставлю 17:30),                                                                                                                                                                                     Калиничев АИ до 17:40,\\\nПогорелов ПЭ до 16:14,\\\nПожарская ЕВ с 08:10.\nНа счет глаголева даже не знаю\nДавайте поставим до 18:00\n\n ![image.png](/ajax/v2/attachments/16?inline=true =400x) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'previousStatusLastAssignee': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'createdAt': '2023-11-27T10:35:56.975+0000',
    'checklistTotal': 6,
    'commentWithExternalMessageCount': 0,
    'updatedAt': '2025-01-15T06:15:38.013+0000',
    'lastCommentUpdatedAt': '2024-01-22T13:39:33.135+0000',
    'summary': 'Пересмотреть округление времени + Штрафы',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      },
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 26,
    'checklistItems': [
      {
        'id': '65a10d789a0bde63a56f4f7d',
        'text': 'Доработать удаление графика подразделения (ошибка)',
        'textHtml': '<p>Доработать удаление графика подразделения (ошибка)</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '65a10d8822b7d234fc876994',
        'text': 'Привязать график подразделения в прочие функции, по приему userFactAtwork без плана',
        'textHtml': '<p>Привязать график подразделения в прочие функции, по приему userFactAtwork без плана</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '65a10da39a0bde63a56f4f85',
        'text': 'Сделать автоматическое создание штрафов',
        'textHtml': '<p>Сделать автоматическое создание штрафов</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '65a7ea5d4328fe18bea3dc7a',
        'text': 'Отбрасывать секунды из значений моего графика',
        'textHtml': '<p>Отбрасывать секунды из значений моего графика</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '65a7eb17750f6571da512fdf',
        'text': 'Сделать удаление штрафов',
        'textHtml': '<p>Сделать удаление штрафов</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '65a7eb254328fe18bea3dcaa',
        'text': 'Привязать штрафы в отчет ЗП',
        'textHtml': '<p>Привязать штрафы в отчет ЗП</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      }
    ],
    'votes': 0,
    'assignee': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'parent': {
      'self': 'https://api.tracker.yandex.net/v2/issues/STRUCTURE-8',
      'id': '655f653ad9999e60375ae916',
      'key': 'STRUCTURE-8',
      'display': 'Автоматическая простановка времени сотрудникам'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-117',
    'id': '66cf4e5cf649bd4ab985c725',
    'key': 'DEVELOPMENT-117',
    'version': 14,
    'lastCommentUpdatedAt': '2024-08-31T07:41:35.102+0000',
    'summary': 'Распределение зарплат по направлениям.',
    'statusStartTime': '2025-01-15T06:15:37.929+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 0,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![Изображение WhatsApp 2024-08-28 в 09.46.11_91f73a73.jpg](/ajax/v2/attachments/219?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-08-28T16:20:44.181+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'checklistItems': [
      {
        'id': '66d6bee3f8a3f22cca44df4a',
        'text': 'Проверку: не может быть более 100% на человека',
        'textHtml': '<p>Проверку: не может быть более 100% на человека</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:37.929+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-23',
    'id': '65795afc3662622a984c8932',
    'key': 'DEVELOPMENT-23',
    'version': 14,
    'lastCommentUpdatedAt': '2023-12-13T07:34:49.604+0000',
    'summary': 'Простановка времени. Кочетков',
    'statusStartTime': '2025-01-15T06:15:37.853+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-12-13T07:19:24.363+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:37.852+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-115',
    'id': '66c6fec44027664e718324fa',
    'key': 'DEVELOPMENT-115',
    'version': 11,
    'summary': 'Фильтрация в очтете ЗП по объектам',
    'statusStartTime': '2025-01-15T06:15:37.774+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![image.png](/ajax/v2/attachments/217?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-08-22T09:03:00.296+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:37.774+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-121',
    'id': '66d6bba3f8a3f22cca44de88',
    'key': 'DEVELOPMENT-121',
    'version': 10,
    'lastCommentUpdatedAt': '2024-09-09T12:42:07.389+0000',
    'summary': 'Автоматическая простановка времени техники убрать связь с планом.',
    'statusStartTime': '2025-01-15T06:15:37.695+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-09-03T07:32:51.941+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:37.694+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-104',
    'id': '666b10bda0db5d3a9decfec4',
    'key': 'DEVELOPMENT-104',
    'version': 28,
    'lastCommentUpdatedAt': '2024-07-26T13:30:57.013+0000',
    'summary': 'Фиксация "ЗП отчет". Журнал зарплат',
    'statusStartTime': '2025-01-15T06:15:37.617+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 5,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![image.png](/ajax/v2/attachments/208?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-06-13T15:31:07.847+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 2,
    'checklistItems': [
      {
        'id': '66a01e7ee8a8974175a074ee',
        'text': 'Поправить: Аббасова показывается только при одном из фильтров по подразделению. Исправить. Она должна показываться в каждлм',
        'textHtml': '<p>Поправить: Аббасова показывается только при одном из фильтров по подразделению. Исправить. Она должна показываться в каждлм</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      },
      {
        'id': '66a24fecd81aba27d3c7b267',
        'text': 'Удаление зафиксированных',
        'textHtml': '<p>Удаление зафиксированных</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '66a25001660b62405c1c404e',
        'text': 'Сканичение excel зафиксированных',
        'textHtml': '<p>Сканичение excel зафиксированных</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      },
      {
        'id': '66a2516e660b62405c1c4076',
        'text': 'Закрыть для редактирования ячейки ЗП при выборе зафиксированных',
        'textHtml': '<p>Закрыть для редактирования ячейки ЗП при выборе зафиксированных</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '66a25293d81aba27d3c7b2c8',
        'text': 'Рассчитывать итого для зафиксированных',
        'textHtml': '<p>Рассчитывать итого для зафиксированных</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '66a27437fd9c7057c55b8957',
        'text': 'Отчет по дню',
        'textHtml': '<p>Отчет по дню</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      },
      {
        'id': '66a37da49f7a1263a35834a6',
        'text': 'Автозагрузка Отчета за месяц',
        'textHtml': '<p>Автозагрузка Отчета за месяц</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '66a387dc7ac77b4702d55237',
        'text': 'В зафиксированных не показывается кол-во дней',
        'textHtml': '<p>В зафиксированных не показывается кол-во дней</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 8,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:37.616+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-142',
    'id': '674cbc3098b5af2742834c9d',
    'key': 'DEVELOPMENT-142',
    'version': 9,
    'summary': 'Удаление последней записи в присвоении должности открывает предыдущую закрытую',
    'statusStartTime': '2025-01-15T06:15:37.539+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-12-01T19:42:40.495+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:37.539+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-53',
    'id': '65b67f8b99168b6d741c112d',
    'key': 'DEVELOPMENT-53',
    'version': 16,
    'lastCommentUpdatedAt': '2024-02-27T22:17:44.684+0000',
    'summary': 'Список день рождений с напоминаниями',
    'statusStartTime': '2025-01-15T06:15:37.459+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-01-28T16:23:39.770+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 2,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:37.459+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-68',
    'id': '65de5e7d2ebae944dd4f063e',
    'key': 'DEVELOPMENT-68',
    'version': 11,
    'lastCommentUpdatedAt': '2024-02-27T22:13:57.461+0000',
    'summary': 'Баг. Ежедневный план. Наемная техника. Ед.изм',
    'statusStartTime': '2025-01-15T06:15:37.377+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-02-27T22:13:17.805+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 2,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:37.377+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-137',
    'id': '673482b8477a066bfe2883ac',
    'key': 'DEVELOPMENT-137',
    'version': 11,
    'summary': 'Автоматическое создание смет по проекту',
    'statusStartTime': '2025-01-15T06:15:37.297+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![Изображение WhatsApp 2024-11-08 в 13.33.41_5107d4e7.jpg](/ajax/v2/attachments/249?inline=true =x600) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-11-13T10:43:04.808+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:37.297+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-67',
    'id': '65de5d166641d91b7f629a9d',
    'key': 'DEVELOPMENT-67',
    'version': 10,
    'summary': 'Опоздание. Не начислять штраф сторожам',
    'statusStartTime': '2025-01-15T06:15:37.220+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-02-27T22:07:16.870+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:37.220+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-153',
    'id': '67628b9c7e2ed670ef8890fc',
    'key': 'DEVELOPMENT-153',
    'version': 13,
    'summary': 'Подарки. Сумма от фирм и подсветка неполной оплаты',
    'statusStartTime': '2025-01-15T06:15:37.105+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' \n\n  ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-12-18T08:45:16.145+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:37.105+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-25',
    'id': '657b20225ac708403abc4aeb',
    'key': 'DEVELOPMENT-25',
    'version': 12,
    'summary': 'Убрать расширение сегментов до границ МГ. Оставить только обрезку по МГ.',
    'statusStartTime': '2025-01-15T06:15:37.002+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![image.png](/ajax/v2/attachments/62?inline=true =400x) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/11',
      'id': '11',
      'key': 'release',
      'display': 'Релиз'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-12-14T15:32:50.063+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:37.002+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-12',
    'id': '65672f605195ee283499d257',
    'key': 'DEVELOPMENT-12',
    'version': 25,
    'lastCommentUpdatedAt': '2023-12-01T14:52:58.589+0000',
    'pendingReplyFrom': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      }
    ],
    'summary': 'Баг с созданием множественных записей, без внешней на то причины',
    'statusStartTime': '2025-01-15T06:15:36.877+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'Создается несколько записей:\n\n ![image.png](/ajax/v2/attachments/19?inline=true =400x) \n\nХотя план такой: \n\n ![image.png](/ajax/v2/attachments/20?inline=true =400x) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/1',
      'id': '1',
      'key': 'bug',
      'display': 'Ошибка'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-11-29T12:32:32.504+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      },
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 8,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:36.877+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'parent': {
      'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-2',
      'id': '655f25dd5c93d16f5d1f9750',
      'key': 'DEVELOPMENT-2',
      'display': 'Автоматическая простановка времени сотрудникам'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-130',
    'id': '6720baf7920f566078a20161',
    'key': 'DEVELOPMENT-130',
    'version': 10,
    'summary': 'Показывать ошибку при создании присвоений должностей',
    'statusStartTime': '2025-01-15T06:15:36.779+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'Описание проблемы: \n\nчеловек был принят на работу 02.09, мы создаем ему новое присвоение, форма закрывается, ошибки не возникает, но и запись не создается…\n\nВ ответе от серевра приходит : 200, true',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-10-29T10:37:43.720+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:36.778+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-11',
    'id': '65672dd85195ee283499d234',
    'key': 'DEVELOPMENT-11',
    'version': 18,
    'lastCommentUpdatedAt': '2023-12-07T16:00:59.310+0000',
    'pendingReplyFrom': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      }
    ],
    'summary': 'Простановка времени ночникам без плана.',
    'statusStartTime': '2025-01-15T06:15:36.686+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-11-29T12:25:59.987+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      },
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 7,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:36.686+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'parent': {
      'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-2',
      'id': '655f25dd5c93d16f5d1f9750',
      'key': 'DEVELOPMENT-2',
      'display': 'Автоматическая простановка времени сотрудникам'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-49',
    'id': '65b360d18e9e4d648be33138',
    'key': 'DEVELOPMENT-49',
    'version': 14,
    'lastCommentUpdatedAt': '2024-03-19T11:48:22.101+0000',
    'summary': 'ТЕкущее распределение',
    'statusStartTime': '2025-01-15T06:15:36.587+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'Красный цвет - Те кто не пришел вообще (нет данных из МГ или нет связи с МГ).\nЖелтый цвет - пришел с опозданием (правила, те что при округлении)\n\nКак-то подсвечивать фон строки для сотрудника или строку или порядковый номер.',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-01-26T07:35:45.074+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:36.587+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-3',
    'id': '655f27eecb804d3fde370a5b',
    'key': 'DEVELOPMENT-3',
    'version': 29,
    'lastCommentUpdatedAt': '2023-12-15T14:22:54.624+0000',
    'pendingReplyFrom': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      }
    ],
    'summary': 'Баг формы создания факта сотрудника',
    'statusStartTime': '2025-01-15T06:15:36.472+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'Не корректно работает кнопка переключения смены.\n\n![image.png](/ajax/v2/attachments/1?inline=true =400x)',
    'boards': [
      {
        'id': 4,
        'name': 'development'
      },
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/1',
      'id': '1',
      'key': 'bug',
      'display': 'Ошибка'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-11-23T10:22:38.222+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 7,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:36.472+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-85',
    'id': '65fac3dbfb9dd91839118baa',
    'key': 'DEVELOPMENT-85',
    'version': 12,
    'lastCommentUpdatedAt': '2024-03-27T14:28:29.464+0000',
    'summary': 'schema.index  для UsersWaybills для исключения задвоения',
    'statusStartTime': '2025-01-15T06:15:36.390+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-03-20T11:09:14.980+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 2,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:36.390+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-18',
    'id': '6572f32367243706905a9a76',
    'key': 'DEVELOPMENT-18',
    'version': 19,
    'lastCommentUpdatedAt': '2023-12-09T15:42:32.904+0000',
    'pendingReplyFrom': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      }
    ],
    'summary': 'План-факт-рапорт-табель. Баг в сравнении времени',
    'statusStartTime': '2025-01-15T06:15:36.293+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': '![image.png](/ajax/v2/attachments/39?inline=true =400x)\n\nЕсть 2 записи факта работы машиниста на техники.\nКаждая запись из рапорта сравнивается со всеми записями табеля \nВот что происходит\nнужно сделать сравнение всех записей рапорта по всем записями табеля в рамках техники и водителя. Нужно доработать логику сравнения.\nили просто тут отображение поменяю, буду объединять записи и сумму времени, если одинаковый водитель\n\n ![image.png](/ajax/v2/attachments/40?inline=true =400x) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'previousStatusLastAssignee': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'createdAt': '2023-12-08T10:42:43.356+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      },
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 2,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'assignee': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:36.293+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-52',
    'id': '65b67f7f99168b6d741c112a',
    'key': 'DEVELOPMENT-52',
    'version': 23,
    'lastCommentUpdatedAt': '2024-02-20T20:57:29.247+0000',
    'summary': 'Подарки, НГ, ДР, 8, 23',
    'statusStartTime': '2025-01-15T06:15:36.171+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 1,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![Изображение WhatsApp 2024-02-06 в 16.41.38_2e0f5489.jpg](/ajax/v2/attachments/149?inline=true =400x) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-01-28T16:23:27.475+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 3,
    'checklistItems': [
      {
        'id': '65d3f78bfc5b4764279848eb',
        'text': 'Удаление записи записи подарков и сотрудников или корзина.',
        'textHtml': '<p>Удаление записи записи подарков и сотрудников или корзина.</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:36.171+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-66',
    'id': '65dda393ce4752412cb4605b',
    'key': 'DEVELOPMENT-66',
    'version': 9,
    'summary': 'Простановка времени. Убрать сотрудников. Переименовать',
    'statusStartTime': '2025-01-15T06:15:36.031+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-02-27T08:55:47.390+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:36.030+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-17',
    'id': '6571d27470145c5063585950',
    'key': 'DEVELOPMENT-17',
    'version': 23,
    'pendingReplyFrom': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      }
    ],
    'statusStartTime': '2025-01-15T06:15:35.937+0000',
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'checklistDone': 2,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![image.png](/ajax/v2/attachments/36?inline=true =400x)  ![image.png](/ajax/v2/attachments/37?inline=true =400x) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'previousStatusLastAssignee': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'createdAt': '2023-12-07T14:11:00.340+0000',
    'checklistTotal': 2,
    'commentWithExternalMessageCount': 0,
    'updatedAt': '2025-01-15T06:15:35.937+0000',
    'lastCommentUpdatedAt': '2023-12-09T15:42:11.742+0000',
    'summary': 'Толще линии в строке сотрудника и отображение техники план без факта',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      },
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 3,
    'checklistItems': [
      {
        'id': '6571d286df22b8765e0f68c5',
        'text': 'Толще линии в строке сотрудника',
        'textHtml': '<p>Толще линии в строке сотрудника</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      },
      {
        'id': '6571d29adf22b8765e0f68c7',
        'text': 'Баг с отображением факта без плана техники',
        'textHtml': '<p>Баг с отображением факта без плана техники</p>\n',
        'checked': true,
        'checklistItemType': 'standard'
      }
    ],
    'votes': 0,
    'assignee': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-127',
    'id': '66ec72660c4412198a42af75',
    'key': 'DEVELOPMENT-127',
    'version': 12,
    'lastCommentUpdatedAt': '2024-10-18T14:34:49.325+0000',
    'summary': 'Подарки доделать',
    'statusStartTime': '2025-01-15T06:15:35.846+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'И в Ееп ещё подарки надо доделать',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-09-19T18:50:13.990+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 2,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:35.846+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-103',
    'id': '6668105b4b7b2c369cc974a0',
    'key': 'DEVELOPMENT-103',
    'version': 12,
    'summary': 'График обязательных платежей за месяц',
    'statusStartTime': '2025-01-15T06:15:35.659+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![Изображение WhatsApp 2024-06-13 в 17.26.41_a521753d.jpg](/ajax/v2/attachments/209?inline=true)  ![image.png](/ajax/v2/attachments/210?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-06-11T08:52:43.444+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:35.659+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-5',
    'id': '655fbd535c93d16f5d2005dd',
    'key': 'DEVELOPMENT-5',
    'version': 25,
    'lastCommentUpdatedAt': '2023-12-01T07:20:42.918+0000',
    'summary': 'Отладка автоматической простановки времени по расписанию',
    'originalEstimation': 'PT0S',
    'statusStartTime': '2025-01-15T06:15:35.566+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'spent': 'PT4H',
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![image.png](/ajax/v2/attachments/4?inline=true =400x)  ![image.png](/ajax/v2/attachments/5?inline=true =400x) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'estimation': 'PT0S',
    'createdAt': '2023-11-23T21:00:03.522+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 7,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:35.565+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'parent': {
      'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-2',
      'id': '655f25dd5c93d16f5d1f9750',
      'key': 'DEVELOPMENT-2',
      'display': 'Автоматическая простановка времени сотрудникам'
    },
    'favorite': false,
    'workLogs': [
      {
        'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-5/worklog/3',
        'id': 3,
        'version': 1,
        'issue': {
          'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-5',
          'id': '655fbd535c93d16f5d2005dd',
          'key': 'DEVELOPMENT-5',
          'display': 'Отладка автоматической простановки времени по расписанию'
        },
        'comment': 'Сделал то-то',
        'createdBy': {
          'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
          'id': '8000000000000005',
          'display': 'Алексей Калиничев',
          'cloudUid': 'ajeuod5beum5ki4v1iop',
          'passportUid': 1918030851
        },
        'updatedBy': {
          'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
          'id': '8000000000000005',
          'display': 'Алексей Калиничев',
          'cloudUid': 'ajeuod5beum5ki4v1iop',
          'passportUid': 1918030851
        },
        'createdAt': '2023-12-01T12:45:12.456+0000',
        'updatedAt': '2023-12-01T12:45:12.456+0000',
        'start': '2023-12-01T12:44:50.755+0000',
        'duration': 'PT4H'
      }
    ]
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-143',
    'id': '674cc1ac98b5af2742834ced',
    'key': 'DEVELOPMENT-143',
    'version': 11,
    'summary': 'Перефиксация сотрудников. фильтрация',
    'statusStartTime': '2025-01-15T06:15:35.460+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'В списке сотрудников к перефиксации фильтровать на основании фильтров из ЗП очтета ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-12-01T20:06:04.416+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:35.460+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-40',
    'id': '659c4323f87ed72bbdd151f9',
    'key': 'DEVELOPMENT-40',
    'version': 20,
    'lastCommentUpdatedAt': '2024-01-15T15:18:06.291+0000',
    'summary': 'Добавить форму создания собственной техники. Форма простановки времени (Новая)',
    'statusStartTime': '2025-01-15T06:15:35.361+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-01-08T18:46:59.796+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      },
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 3,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:35.360+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-33',
    'id': '65893bcbd14e6c28fac47b31',
    'key': 'DEVELOPMENT-33',
    'version': 13,
    'summary': 'Пересмотреть пересечение. Ставки/Оклады',
    'statusStartTime': '2025-01-15T06:15:35.256+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' Ошибка связанна с тем, что пока есть открытая запись (без даты окончания) другие записи менять нельзя. Пересмотреть логику:\n\nЕсли дата начала и окончания редактируемой записи меньше даты начала открытой, то не запускать эту проверку и пропускать.',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-12-25T08:22:35.239+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:35.256+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-31',
    'id': '6581a3c6d50b352e0fa88c5f',
    'key': 'DEVELOPMENT-31',
    'version': 13,
    'summary': 'Показывать всех наемников',
    'statusStartTime': '2025-01-15T06:15:35.156+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' почему ту сюда не подтягиваются фио наемников из справочника наемников\n\nПоказывается список наемников, у которых поле active: true.\n\nТакого поля нет в модели описания в бд.\n\nТ.е. предположу, что вы просили оставить только такой список наемников. Вспоминается, что вы путались в том кто и где и остановились просто на "Наемник 1", "Наемник 2",  чтобы не вносить лишние данные в систему ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-12-19T14:08:06.423+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:35.155+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-22',
    'id': '6579559a4c9e221333b046b0',
    'key': 'DEVELOPMENT-22',
    'version': 11,
    'summary': 'Сдельные бригады. Условие. По алфавиту.',
    'statusStartTime': '2025-01-15T06:15:35.015+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': '\\[09:30, 13.12.2023\\] Сергей Сергеевич Журавлев: Бригады идут не по алфавиту\n\\[09:30, 13.12.2023\\] Сергей Сергеевич Журавлев: привет, надо поправить',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-12-13T06:56:26.555+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:15:35.015+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-163',
    'id': '67867c5659e40e011cbc1df1',
    'key': 'DEVELOPMENT-163',
    'version': 3,
    'summary': 'Переименовать',
    'statusStartTime': '2025-01-14T15:01:42.048+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2025-01-14T15:01:42.015+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-15T06:10:24.941+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-35',
    'id': '658a9d069d08735dd21c9308',
    'key': 'DEVELOPMENT-35',
    'version': 9,
    'summary': 'Закрыть ЗП паролем',
    'statusStartTime': '2025-01-09T15:58:10.316+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'done',
      'display': 'Завершен',
      'key': 'done'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-12-26T09:29:42.574+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2025-01-09T15:58:10.315+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/8',
      'id': '8',
      'key': 'closed',
      'display': 'Закрыт'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/5',
      'id': '5',
      'key': 'tested',
      'display': 'Протестировано'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-160',
    'id': '676fd910d882580d1794c6b1',
    'key': 'DEVELOPMENT-160',
    'version': 6,
    'summary': 'Простановка факта автоматического офисным.',
    'statusStartTime': '2024-12-28T10:56:15.433+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'Погорелов как офисный сотрудник. Работал монтажником по выходным. а ему все равно проставлялась база в факте',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-12-28T10:55:12.517+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-12-28T10:56:15.433+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/31',
      'id': '31',
      'key': 'inQueue',
      'display': 'В очереди'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-157',
    'id': '6764071239d0676460b52a8a',
    'key': 'DEVELOPMENT-157',
    'version': 5,
    'summary': 'Легенда.71',
    'statusStartTime': '2024-12-19T11:44:25.084+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-12-19T11:44:18.119+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-12-19T14:26:07.390+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/31',
      'id': '31',
      'key': 'inQueue',
      'display': 'В очереди'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-144',
    'id': '674db00d8f62ea704f03a0b0',
    'key': 'DEVELOPMENT-144',
    'version': 4,
    'summary': 'Баг. Простановка времени технике',
    'statusStartTime': '2024-12-02T13:03:39.131+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'Когда создаем факт, у которого нет окончания, при проставлении окончания показываеься NAN',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-12-02T13:03:09.428+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-12-19T10:36:57.853+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/31',
      'id': '31',
      'key': 'inQueue',
      'display': 'В очереди'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-156',
    'id': '6762b4008716f9713945f275',
    'key': 'DEVELOPMENT-156',
    'version': 3,
    'summary': 'ИРД и ГАСН по умолчанию привести к типовой форме',
    'statusStartTime': '2024-12-18T11:37:41.009+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-12-18T11:37:36.865+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-12-18T11:37:41.008+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/31',
      'id': '31',
      'key': 'inQueue',
      'display': 'В очереди'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-155',
    'id': '67628f097e2ed670ef88919a',
    'key': 'DEVELOPMENT-155',
    'version': 5,
    'summary': 'Сметы',
    'statusStartTime': '2024-12-18T08:59:57.225+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![Изображение WhatsApp 2024-12-18 в 11.58.48\\_c0a518b8.jpg](/ajax/v2/attachments/283?inline=true =1077x589) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-12-18T08:59:53.789+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-12-18T09:00:07.563+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/31',
      'id': '31',
      'key': 'inQueue',
      'display': 'В очереди'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-154',
    'id': '67628c75b0ebf56d85a6ec41',
    'key': 'DEVELOPMENT-154',
    'version': 5,
    'summary': 'Отчеты для директора. Добавить функционал',
    'statusStartTime': '2024-12-18T08:50:20.061+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![image.png](/ajax/v2/attachments/282?inline=true =778x600) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-12-18T08:48:53.108+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-12-18T08:50:26.983+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/31',
      'id': '31',
      'key': 'inQueue',
      'display': 'В очереди'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-151',
    'id': '6751bec9d9ce5f3d4cd736a6',
    'key': 'DEVELOPMENT-151',
    'version': 7,
    'summary': 'Справочник организации',
    'statusStartTime': '2024-12-05T14:55:08.881+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![image.png](/ajax/v2/attachments/275?inline=true =664x600) ![image.png](/ajax/v2/attachments/274?inline=true =966x514)',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-12-05T14:55:04.949+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-12-05T14:56:44.543+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/31',
      'id': '31',
      'key': 'inQueue',
      'display': 'В очереди'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-145',
    'id': '674db2298f62ea704f03a5f0',
    'key': 'DEVELOPMENT-145',
    'version': 3,
    'summary': 'Уязвимости',
    'statusStartTime': '2024-12-02T13:12:09.576+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/3',
      'id': '3',
      'display': 'Перспектива'
    },
    'description': 'К сведению -прогонял сайт на уязвимости, пишет есть критическая уязвимость с устаревшей библиотекой moment.js, под нее есть обновление. И еще 7 шт средних угроз, в основном связанных с настройкой веб-сервера -нет ssl и т д .',
    'boards': [
      {
        'id': 7,
        'name': 'Доска проекта Перспектива'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-12-02T13:12:09.537+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-12-02T13:12:13.910+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-87',
    'id': '6602aefb835a2f6e7d93a188',
    'key': 'DEVELOPMENT-87',
    'version': 6,
    'summary': 'Пересмотреть Согласования (не верно подсвечивается столбец подтвержденные)',
    'statusStartTime': '2024-12-02T13:03:15.904+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![image.png](/ajax/v2/attachments/185?inline=true)  ![image.png](/ajax/v2/attachments/186?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-03-26T11:18:19.559+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-12-02T13:03:15.904+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/31',
      'id': '31',
      'key': 'inQueue',
      'display': 'В очереди'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-141',
    'id': '673de65bf111f9731c5dec13',
    'key': 'DEVELOPMENT-141',
    'version': 4,
    'summary': 'Начальник цеха видит только своих рабочих при простановке ЕП',
    'statusStartTime': '2024-11-20T13:38:35.056+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/3',
      'id': '3',
      'display': 'Перспектива'
    },
    'description': 'появился вопрос -пробую в ежедневном плане добавить дела с назначением рабочих, и вот в чем вопрос - получается что я доступными для назначения вижу полностью всех сотрудников всех наших организаций. Можно ли как то ограничивать видимость рабочих? чтобы например нач-к цеха на ТЗКД мог видеть только работников ТЗКД ? конечно желательно в по умолчанию без установки фильтра\n\n ![image.png](/ajax/v2/attachments/261?inline=true =x600) ',
    'boards': [
      {
        'id': 7,
        'name': 'Доска проекта Перспектива'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-11-20T13:38:35.017+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-11-20T13:38:52.392+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-139',
    'id': '673b366778a463565e5783bf',
    'key': 'DEVELOPMENT-139',
    'version': 4,
    'summary': 'Заголовок в списке наемной техники',
    'statusStartTime': '2024-11-18T12:43:19.929+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/3',
      'id': '3',
      'display': 'Перспектива'
    },
    'description': ' ![Изображение WhatsApp 2024-11-18 в 15.41.22_55e6648a.jpg](/ajax/v2/attachments/259?inline=true =x600) вот еще что заметил - меню верхнее перекрывает верхнюю строчку , справочники-наемная техника и справочники -должности в ЕП. Не критично конечно но к сведению.',
    'boards': [
      {
        'id': 7,
        'name': 'Доска проекта Перспектива'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-11-18T12:43:19.902+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-11-18T12:43:38.413+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-122',
    'id': '66deaab4c4ac4e28e0f18625',
    'key': 'DEVELOPMENT-122',
    'version': 7,
    'summary': 'Отчет ЗП. Баг с отображением',
    'statusStartTime': '2024-11-13T10:56:24.005+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'Перезагрузила-не помогло, выбрала другой месяц помогло😆',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-09-09T07:58:44.405+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-11-13T10:56:24.000+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/2',
      'id': '2',
      'key': 'needInfo',
      'display': 'Требуется информация'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/31',
      'id': '31',
      'key': 'inQueue',
      'display': 'В очереди'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-120',
    'id': '66d2c84cbcb1530de52b3853',
    'key': 'DEVELOPMENT-120',
    'version': 7,
    'lastCommentUpdatedAt': '2024-10-15T13:54:04.443+0000',
    'summary': 'Баг в ЗП сотрудника по месяцам',
    'statusStartTime': '2024-11-13T10:56:21.969+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![Изображение WhatsApp 2024-08-30 в 10.04.16_6d743247.jpg](/ajax/v2/attachments/221?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-08-31T07:37:48.777+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-11-13T10:56:21.968+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/2',
      'id': '2',
      'key': 'needInfo',
      'display': 'Требуется информация'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/31',
      'id': '31',
      'key': 'inQueue',
      'display': 'В очереди'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-113',
    'id': '667d8be54da98506c5442289',
    'key': 'DEVELOPMENT-113',
    'version': 3,
    'summary': 'Генерация Excel',
    'statusStartTime': '2024-06-27T15:57:28.248+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/2',
      'id': '2',
      'display': 'ЛЗК Vue2'
    },
    'boards': [
      {
        'id': 6,
        'name': 'Доска проекта ЛЗК Vue2'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-06-27T15:57:25.460+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-06-27T15:57:28.248+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/31',
      'id': '31',
      'key': 'inQueue',
      'display': 'В очереди'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-112',
    'id': '667d8baeabc7787ea594238e',
    'key': 'DEVELOPMENT-112',
    'version': 4,
    'summary': 'Проблема. Долго добавляются смены, даты',
    'statusStartTime': '2024-06-27T15:56:57.007+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/2',
      'id': '2',
      'display': 'ЛЗК Vue2'
    },
    'boards': [
      {
        'id': 6,
        'name': 'Доска проекта ЛЗК Vue2'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-06-27T15:56:30.563+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-06-27T15:56:57.007+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/31',
      'id': '31',
      'key': 'inQueue',
      'display': 'В очереди'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-108',
    'id': '667d58b88f8d2b456cb47894',
    'key': 'DEVELOPMENT-108',
    'version': 3,
    'summary': 'Оптимизировать загрузку',
    'statusStartTime': '2024-06-27T15:56:55.891+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/2',
      'id': '2',
      'display': 'ЛЗК Vue2'
    },
    'boards': [
      {
        'id': 6,
        'name': 'Доска проекта ЛЗК Vue2'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-06-27T12:19:04.288+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-06-27T15:56:55.891+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/31',
      'id': '31',
      'key': 'inQueue',
      'display': 'В очереди'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-107',
    'id': '667d58a38f8d2b456cb47890',
    'key': 'DEVELOPMENT-107',
    'version': 17,
    'summary': 'Распределение доступа к задачам и затратам',
    'statusStartTime': '2024-06-27T12:35:26.114+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'inProgress',
      'display': 'В процессе',
      'key': 'inProgress'
    },
    'checklistDone': 0,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/2',
      'id': '2',
      'display': 'ЛЗК Vue2'
    },
    'boards': [
      {
        'id': 6,
        'name': 'Доска проекта ЛЗК Vue2'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-06-27T12:18:43.289+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'checklistItems': [
      {
        'id': '667d67644da98506c5440c3b',
        'text': 'Задача. Распределение прав',
        'textHtml': '<p>Задача. Распределение прав</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      },
      {
        'id': '667d5ca74da98506c543fcfa',
        'text': 'Задача. Редактирование',
        'textHtml': '<p>Задача. Редактирование</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      },
      {
        'id': '667d5cc14da98506c543fcfc',
        'text': 'Задача. Создание',
        'textHtml': '<p>Задача. Создание</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      },
      {
        'id': '667d5cc6abc7787ea594011a',
        'text': 'Задача. Просмотр',
        'textHtml': '<p>Задача. Просмотр</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      },
      {
        'id': '667d5ccfabc7787ea594011c',
        'text': 'Задача. Удаление',
        'textHtml': '<p>Задача. Удаление</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      },
      {
        'id': '667d5ce58f8d2b456cb47974',
        'text': 'Задача. Права раздаются  на все вложенные задачи',
        'textHtml': '<p>Задача. Права раздаются  на все вложенные задачи</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      },
      {
        'id': '667d5cf34da98506c543fd05',
        'text': 'Затрата. Создание',
        'textHtml': '<p>Затрата. Создание</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      },
      {
        'id': '667d5cfbabc7787ea594011f',
        'text': 'Затрата. Просмотр',
        'textHtml': '<p>Затрата. Просмотр</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      },
      {
        'id': '667d5d014da98506c543fd09',
        'text': 'Затрата. Редактирование',
        'textHtml': '<p>Затрата. Редактирование</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      },
      {
        'id': '667d5d09abc7787ea5940123',
        'text': 'Затрата. Удаление',
        'textHtml': '<p>Затрата. Удаление</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 10,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-06-27T13:21:47.998+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/3',
      'id': '3',
      'key': 'inProgress',
      'display': 'В работе'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/31',
      'id': '31',
      'key': 'inQueue',
      'display': 'В очереди'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-110',
    'id': '667d592d4da98506c543fc2b',
    'key': 'DEVELOPMENT-110',
    'version': 3,
    'summary': 'Создать телеграмм канал для пользователей приложения (где они могут общаться сами, и где только инфа от разраба)',
    'statusStartTime': '2024-06-27T12:26:53.460+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/2',
      'id': '2',
      'display': 'ЛЗК Vue2'
    },
    'boards': [
      {
        'id': 6,
        'name': 'Доска проекта ЛЗК Vue2'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-06-27T12:21:00.983+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-06-27T12:26:53.460+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/29',
      'id': '29',
      'key': 'otlozen',
      'display': 'Отложен'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-111',
    'id': '667d5a49abc7787ea594002c',
    'key': 'DEVELOPMENT-111',
    'version': 3,
    'summary': 'Сделать страницу с описанием приложения и логики расчета',
    'statusStartTime': '2024-06-27T12:26:48.890+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/2',
      'id': '2',
      'display': 'ЛЗК Vue2'
    },
    'boards': [
      {
        'id': 6,
        'name': 'Доска проекта ЛЗК Vue2'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-06-27T12:25:45.565+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-06-27T12:26:48.885+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/29',
      'id': '29',
      'key': 'otlozen',
      'display': 'Отложен'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-109',
    'id': '667d58f78f8d2b456cb478a1',
    'key': 'DEVELOPMENT-109',
    'version': 2,
    'summary': 'Показать справочники (с правами редактирования и просмотра)',
    'statusStartTime': '2024-06-27T12:20:07.860+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000002',
      'id': '8000000000000002',
      'display': 'Робот сервиса Tracker Робот',
      'passportUid': 780889736
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/2',
      'id': '2',
      'display': 'ЛЗК Vue2'
    },
    'boards': [
      {
        'id': 6,
        'name': 'Доска проекта ЛЗК Vue2'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-06-27T12:20:07.131+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-06-27T12:20:08.570+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-105',
    'id': '667563c66aa7b6340969e95c',
    'key': 'DEVELOPMENT-105',
    'version': 6,
    'summary': 'Автозакрытие формы создания согласований',
    'statusStartTime': '2024-06-21T11:28:22.759+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![image.png](/ajax/v2/attachments/211?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-06-21T11:28:06.222+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-06-21T11:28:32.588+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/2',
      'id': '2',
      'key': 'needInfo',
      'display': 'Требуется информация'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-100',
    'id': '6655af7bc56a7e1d9c624179',
    'key': 'DEVELOPMENT-100',
    'version': 9,
    'summary': 'Переименовать',
    'statusStartTime': '2024-05-31T11:04:10.122+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': '',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-05-28T10:18:35.312+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-05-31T11:04:10.122+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/2',
      'id': '2',
      'key': 'needInfo',
      'display': 'Требуется информация'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/31',
      'id': '31',
      'key': 'inQueue',
      'display': 'В очереди'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-82',
    'id': '65f32d5c925a83535ce52b85',
    'key': 'DEVELOPMENT-82',
    'version': 8,
    'lastCommentUpdatedAt': '2024-03-20T13:34:54.432+0000',
    'summary': 'Диалоговое окно редактирования факта собственной техники (БАГ со временем начала)',
    'statusStartTime': '2024-05-16T14:47:01.614+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'Время начала может быть ранее времени окончания',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-03-14T17:01:16.317+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-05-16T14:47:01.614+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/2',
      'id': '2',
      'key': 'needInfo',
      'display': 'Требуется информация'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/31',
      'id': '31',
      'key': 'inQueue',
      'display': 'В очереди'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-92',
    'id': '662b7cb63e0be6342374bda6',
    'key': 'DEVELOPMENT-92',
    'version': 8,
    'summary': 'Баг. Сообщение о пересечении времени техники',
    'statusStartTime': '2024-04-26T10:06:46.072+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': '',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-04-26T10:06:46.034+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-04-26T10:08:17.230+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-89',
    'id': '66152312fe44042c1035a5bf',
    'key': 'DEVELOPMENT-89',
    'version': 5,
    'summary': 'Фото к оплате бригадам',
    'statusStartTime': '2024-04-09T11:14:26.190+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![Изображение WhatsApp 2024-04-09 в 13.48.26_47d9241d.jpg](/ajax/v2/attachments/191?inline=true)  ![image.png](/ajax/v2/attachments/192?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-04-09T11:14:26.135+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-04-09T11:14:55.470+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-86',
    'id': '65fd36d36a1d38332f58159b',
    'key': 'DEVELOPMENT-86',
    'version': 3,
    'summary': 'Единый ежедневный план (пересечение текста)',
    'statusStartTime': '2024-03-22T07:44:19.441+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![Изображение WhatsApp 2024-03-22 в 09.02.39_1ecbedfb.jpg](/ajax/v2/attachments/184?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-03-22T07:44:19.390+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-03-22T07:44:32.041+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-81',
    'id': '65f190a30fa3d04d286ead1e',
    'key': 'DEVELOPMENT-81',
    'version': 5,
    'summary': 'Проверка пересечения записей факта. Доработать',
    'statusStartTime': '2024-03-13T11:40:19.822+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' при проверке end может быть не передано, а может быть передано как null, Соответственно нужно подумать, как программа должна на это реагировать….\n\nДля такой записи проверка пересечения прошла, т.к. проставилось при проверке время окончания из бд.\n\n ![image.png](/ajax/v2/attachments/176?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-03-13T11:40:19.736+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-03-13T11:42:34.039+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-80',
    'id': '65f02f25464ead114731186b',
    'key': 'DEVELOPMENT-80',
    'version': 4,
    'summary': 'Личное дело сотрудника. Убрать обязательное Фото ИНН',
    'statusStartTime': '2024-03-12T10:32:05.012+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-03-12T10:32:04.167+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-03-12T10:32:26.065+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-78',
    'id': '65e570f086858d6171627f04',
    'key': 'DEVELOPMENT-78',
    'version': 4,
    'summary': 'пересмотреть "Кто не пришел"',
    'statusStartTime': '2024-03-04T06:57:52.609+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' Осетров тоже за свой счет сегодня, но он не отображается в  "Кто не пришёл"![Изображение WhatsApp 2024-03-04 в 09.56.59_0f38a244.jpg](/ajax/v2/attachments/172?inline=true) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-03-04T06:57:52.548+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-03-04T06:58:28.918+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-75',
    'id': '65df65236641d91b7f631e9a',
    'key': 'DEVELOPMENT-75',
    'version': 5,
    'summary': 'Изменить список сотрудников, которые отвечают за подарки',
    'statusStartTime': '2024-02-28T16:53:55.945+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': '![Изображение WhatsApp 2024-02-28 в 17.36.58](/ajax/v2/attachments/170?inline=true =x562)\n\nДим, сюда нужно добавить Прибытков Владимир Юрьевич вместо ЖВС',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-02-28T16:53:55.867+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-02-28T16:58:14.057+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-76',
    'id': '65df6545ce4752412cb53677',
    'key': 'DEVELOPMENT-76',
    'version': 4,
    'lastCommentUpdatedAt': '2024-02-28T16:55:53.106+0000',
    'summary': 'Список подарков.  Фильтры',
    'statusStartTime': '2024-02-28T16:54:29.690+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': '1. "ФИО", "Какая", "Сотрудник" - текстовый (если значение в фильтре совпадает с частью Фамилии Имения или Отчества, или с частью значения желаемого поля) - понятно.\n2. "Карточка" - цифровой. Вопрос: Фильтр по точному совпадению должен быть? Или логика на выбор: больше, меньше, равно или их комбинация.',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-02-28T16:54:29.626+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-02-28T16:55:53.106+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-73',
    'id': '65df64866641d91b7f63196d',
    'key': 'DEVELOPMENT-73',
    'version': 4,
    'summary': 'Список подарков. Итоги',
    'statusStartTime': '2024-02-28T16:51:18.597+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![Изображение WhatsApp 2024-02-28 в 16.30.34_68b8647e.jpg](/ajax/v2/attachments/168?inline=true =x600) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-02-28T16:51:18.319+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-02-28T16:51:28.858+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-71',
    'id': '65df0d2bce4752412cb50ab5',
    'key': 'DEVELOPMENT-71',
    'version': 4,
    'summary': 'Простановка времени. Поправить шапку',
    'statusStartTime': '2024-02-28T10:38:35.933+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![Изображение WhatsApp 2024-02-28 в 12.03.26_53dc4110.jpg](/ajax/v2/attachments/167?inline=true =x567) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-02-28T10:38:35.858+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-02-28T10:38:47.381+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-70',
    'id': '65df0cf62ebae944dd4f5ae5',
    'key': 'DEVELOPMENT-70',
    'version': 4,
    'summary': 'Подарки. Форма создания сотрудника для подарка',
    'statusStartTime': '2024-02-28T10:37:42.579+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![Изображение WhatsApp 2024-02-28 в 13.37.01_16515fcc.jpg](/ajax/v2/attachments/166?inline=true =x600) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-02-28T10:37:42.513+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-02-28T10:38:00.291+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-69',
    'id': '65de5f57ce4752412cb4bffb',
    'key': 'DEVELOPMENT-69',
    'version': 2,
    'summary': 'Список ДР для подарков. Как для собственных сотрудников',
    'statusStartTime': '2024-02-27T22:16:55.743+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000002',
      'id': '8000000000000002',
      'display': 'Робот сервиса Tracker Робот',
      'passportUid': 780889736
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-02-27T22:16:55.626+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-02-27T22:16:56.749+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-63',
    'id': '65dc773347b3bd6bdccc4db2',
    'key': 'DEVELOPMENT-63',
    'version': 4,
    'summary': 'Список подарков. Выгрузка в Excel.',
    'statusStartTime': '2024-02-26T11:34:11.436+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-02-26T11:34:11.016+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-02-26T11:34:36.819+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-59',
    'id': '65d33b8f992ffd61ba3f48cd',
    'key': 'DEVELOPMENT-59',
    'version': 4,
    'summary': 'Список подарков. Отчет.',
    'statusStartTime': '2024-02-19T11:29:19.974+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'checklistDone': 0,
    'boards': [
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-02-19T11:29:19.898+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'checklistItems': [
      {
        'id': '65d33bac22231d73a85fcc7f',
        'text': 'убрать день рождения из обязательных полей',
        'textHtml': '<p>убрать день рождения из обязательных полей</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      },
      {
        'id': '65d33bbc992ffd61ba3f48d7',
        'text': '3 плюса "+8" "+23" "+НГ"',
        'textHtml': '<p>3 плюса "+8" "+23" "+НГ"</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 2,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-02-19T11:30:04.441+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-58',
    'id': '65c48310ae5bd336d3362929',
    'key': 'DEVELOPMENT-58',
    'version': 6,
    'summary': 'Информирование о незаполненных элементах ЛЗК',
    'statusStartTime': '2024-02-08T07:30:24.322+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'Если в прямых затратах и в задачах (раздел,работа и далее) не заполнены поля:\nЕд. изм, кол-во, Цена, Сумма.\nТо нужно: подсвечивать задачу(ЛЗк, Проект, Раздел, работу и прочее), в которой не заполненные элементы находятся, информируя о том, что внутри есть незаполненные элементы',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-02-08T07:30:24.269+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-02-08T07:32:52.368+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-57',
    'id': '65c482d9ae5bd336d3362919',
    'key': 'DEVELOPMENT-57',
    'version': 2,
    'summary': 'Форма для печати ЛЗК',
    'statusStartTime': '2024-02-08T07:29:29.381+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000002',
      'id': '8000000000000002',
      'display': 'Робот сервиса Tracker Робот',
      'passportUid': 780889736
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-02-08T07:29:29.329+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-02-08T07:29:29.975+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-55',
    'id': '65b8f948f1e154320ab84ff0',
    'key': 'DEVELOPMENT-55',
    'version': 12,
    'lastCommentUpdatedAt': '2024-01-30T13:46:24.755+0000',
    'pendingReplyFrom': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      }
    ],
    'summary': 'Возможность создавать факт работы сотрудника в ночь несколькими записями',
    'statusStartTime': '2024-01-30T13:27:36.522+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'checklistDone': 0,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-01-30T13:27:36.441+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'checklistItems': [
      {
        'id': '65b8fc1bf1e154320ab8508a',
        'text': 'В форму редактирования времени при ночной смены дать возможность выбора даты.',
        'textHtml': '<p>В форму редактирования времени при ночной смены дать возможность выбора даты.</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      },
      {
        'id': '65b8fc40e9bdf64133415680',
        'text': 'В форму создания добавить возможность выбора даты начала',
        'textHtml': '<p>В форму создания добавить возможность выбора даты начала</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 2,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-01-30T13:46:24.755+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-47',
    'id': '65b27a6b8e9e4d648be2d895',
    'key': 'DEVELOPMENT-47',
    'version': 2,
    'summary': 'Сравнение ЕП и Мой График (Отпросился и отметился)',
    'statusStartTime': '2024-01-25T15:12:43.580+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000002',
      'id': '8000000000000002',
      'display': 'Робот сервиса Tracker Робот',
      'passportUid': 780889736
    },
    'statusType': {
      'id': 'new',
      'display': 'Начальный',
      'key': 'new'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-01-25T15:12:42.356+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-01-25T15:12:45.073+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-46',
    'id': '65a40a18d404f77f63a351fb',
    'key': 'DEVELOPMENT-46',
    'version': 16,
    'summary': 'Возможный баг (calcTimeWithOutLunch, checkForLunch - нужно ли вообще сейчас учитывать обед)',
    'statusStartTime': '2024-01-23T14:20:03.785+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
      'id': '8000000000000005',
      'display': 'Алексей Калиничев',
      'cloudUid': 'ajeuod5beum5ki4v1iop',
      'passportUid': 1918030851
    },
    'statusType': {
      'id': 'cancelled',
      'display': 'Отменен',
      'key': 'cancelled'
    },
    'checklistDone': 0,
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'Есть функция расчета calculateTimeByRecord, в ней вызывается функция по вычету обеда и его добавлению\nВ ней вызывается функция, которая получает границы обеда. findTimeBoundariesByUserAtDate.\nДля корректной работы нужно передавать в нее department, в котором есть границы\n\nИтого вопрос: нужно ли корректировать функцию расчета обеда….  она же работает по 11.2024\n\nПо этой же причине почистить функции checkForLunch….. в основном использовался для простановки времени работы в обед.',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-01-14T16:21:44.853+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'checklistItems': [
      {
        'id': '65a40cd122b7d234fc880db3',
        'text': 'Удалить большую часть функций checkForLunch',
        'textHtml': '<p>Удалить большую часть функций checkForLunch</p>\n',
        'checked': false,
        'checklistItemType': 'standard'
      }
    ],
    'checklistTotal': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-01-23T14:20:03.780+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/14',
      'id': '14',
      'key': 'cancelled',
      'display': 'Отменено'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-44',
    'id': '65a03b5d22b7d234fc8734dd',
    'key': 'DEVELOPMENT-44',
    'version': 4,
    'lastCommentUpdatedAt': '2024-01-23T14:16:42.126+0000',
    'summary': 'Праздничные Дни простановка доп. часа.',
    'statusStartTime': '2024-01-23T14:16:48.182+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
      'id': '8000000000000005',
      'display': 'Алексей Калиничев',
      'cloudUid': 'ajeuod5beum5ki4v1iop',
      'passportUid': 1918030851
    },
    'statusType': {
      'id': 'cancelled',
      'display': 'Отменен',
      'key': 'cancelled'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2024-01-11T19:02:53.874+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-01-23T14:16:48.181+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/14',
      'id': '14',
      'key': 'cancelled',
      'display': 'Отменено'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-38',
    'id': '658d9cf7bfcce31ed1feacbc',
    'key': 'DEVELOPMENT-38',
    'version': 5,
    'lastCommentUpdatedAt': '2024-01-22T09:27:35.106+0000',
    'summary': 'Задвоение userswaybills (путевых листов)',
    'statusStartTime': '2023-12-29T11:51:51.095+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-12-28T16:06:15.890+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 2,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-01-22T09:27:35.106+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/29',
      'id': '29',
      'key': 'otlozen',
      'display': 'Отложен'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-26',
    'id': '657c60375a77677679e122fb',
    'key': 'DEVELOPMENT-26',
    'version': 7,
    'lastCommentUpdatedAt': '2023-12-18T18:28:24.421+0000',
    'summary': 'Подумать над реализацией индивидуального графика на день.',
    'statusStartTime': '2024-01-11T11:12:03.177+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
      'id': '8000000000000005',
      'display': 'Алексей Калиничев',
      'cloudUid': 'ajeuod5beum5ki4v1iop',
      'passportUid': 1918030851
    },
    'statusType': {
      'id': 'cancelled',
      'display': 'Отменен',
      'key': 'cancelled'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-12-15T14:18:31.634+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-01-11T11:12:03.171+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/14',
      'id': '14',
      'key': 'cancelled',
      'display': 'Отменено'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/2',
      'id': '2',
      'key': 'needInfo',
      'display': 'Требуется информация'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-24',
    'id': '657b1fa3df3ad8276bcfcd57',
    'key': 'DEVELOPMENT-24',
    'version': 6,
    'summary': 'Перенос планов между объектами',
    'statusStartTime': '2024-01-11T11:09:37.581+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
      'id': '8000000000000005',
      'display': 'Алексей Калиничев',
      'cloudUid': 'ajeuod5beum5ki4v1iop',
      'passportUid': 1918030851
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': ' ![image.png](/ajax/v2/attachments/61?inline=true =400x) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-12-14T15:30:43.347+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-01-11T11:09:37.577+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/29',
      'id': '29',
      'key': 'otlozen',
      'display': 'Отложен'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/2',
      'id': '2',
      'key': 'needInfo',
      'display': 'Требуется информация'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-29',
    'id': '658081318920060b83469555',
    'key': 'DEVELOPMENT-29',
    'version': 9,
    'summary': 'Отчет по собственной техники + форма простановки (показывать комментарий из связанного плана)',
    'statusStartTime': '2024-01-11T11:08:04.074+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
      'id': '8000000000000005',
      'display': 'Алексей Калиничев',
      'cloudUid': 'ajeuod5beum5ki4v1iop',
      'passportUid': 1918030851
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': '1\\. В плане комментарии распределены на 2 записи\n2\\. В простановке  Связь видна\n3\\. В отчете собственной техники комментарии объединяются в один',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-12-18T17:28:17.936+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2024-01-11T11:08:04.071+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/29',
      'id': '29',
      'key': 'otlozen',
      'display': 'Отложен'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/2',
      'id': '2',
      'key': 'needInfo',
      'display': 'Требуется информация'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-27',
    'id': '657fe0e55a77677679e3473c',
    'key': 'DEVELOPMENT-27',
    'version': 7,
    'summary': 'Наблюдать за МГ (авто закрытие смен)',
    'statusStartTime': '2023-12-18T06:05:41.383+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': '  ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-12-18T06:04:21.123+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2023-12-18T06:05:41.378+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/2',
      'id': '2',
      'key': 'needInfo',
      'display': 'Требуется информация'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-15',
    'id': '6571af84df22b8765e0f5194',
    'key': 'DEVELOPMENT-15',
    'version': 5,
    'lastCommentUpdatedAt': '2023-12-07T13:02:10.731+0000',
    'summary': 'Запрет на запись факта в период обеда. Только по согласованию',
    'statusStartTime': '2023-12-14T14:11:03.815+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-12-07T11:41:56.392+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2023-12-14T14:11:03.809+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/29',
      'id': '29',
      'key': 'otlozen',
      'display': 'Отложен'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/31',
      'id': '31',
      'key': 'inQueue',
      'display': 'В очереди'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-21',
    'id': '657897270070844e5886c05e',
    'key': 'DEVELOPMENT-21',
    'version': 6,
    'summary': 'ЗП за период, а не за месяц',
    'statusStartTime': '2023-12-12T17:24:38.696+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'Каменева обратилась с вопросом:\n\nКак сформировать ЗП за период (допустим неделя), а не за месяц',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'createdAt': '2023-12-12T17:23:51.441+0000',
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2023-12-12T17:24:38.687+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/2',
      'id': '2',
      'key': 'needInfo',
      'display': 'Требуется информация'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-13',
    'id': '656ef2cd4e5d4b483f5bd640',
    'key': 'DEVELOPMENT-13',
    'version': 4,
    'summary': 'Были удалены записи факта за 04.12.2023',
    'statusStartTime': '2023-12-06T10:46:32.127+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'При том, что с утра записи были\n\n ![image.png](/ajax/v2/attachments/31?inline=true =400x) ',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/1',
      'id': '1',
      'key': 'bug',
      'display': 'Ошибка'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'previousStatusLastAssignee': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'createdAt': '2023-12-05T09:52:13.610+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 0,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'assignee': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2023-12-12T15:02:53.172+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/29',
      'id': '29',
      'key': 'otlozen',
      'display': 'Отложен'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'parent': {
      'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-2',
      'id': '655f25dd5c93d16f5d1f9750',
      'key': 'DEVELOPMENT-2',
      'display': 'Автоматическая простановка времени сотрудникам'
    },
    'favorite': false,
    'workLogs': []
  },
  {
    'self': 'https://api.tracker.yandex.net/v2/issues/DEVELOPMENT-9',
    'id': '6565fa7bfbc60f6f3eac0c63',
    'key': 'DEVELOPMENT-9',
    'version': 8,
    'lastCommentUpdatedAt': '2023-11-28T14:52:24.823+0000',
    'pendingReplyFrom': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      }
    ],
    'summary': 'Пересмотреть формы планирования',
    'statusStartTime': '2023-11-28T14:51:51.624+0000',
    'updatedBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'statusType': {
      'id': 'paused',
      'display': 'На паузе',
      'key': 'paused'
    },
    'project': {
      'self': 'https://api.tracker.yandex.net/v2/projects/1',
      'id': '1',
      'display': 'СМС'
    },
    'description': 'Если нужно каким-либо образом автоматически проставлять факт отработанного времени  по плану, то тогда нужно изменить форму планирования, т.к. она ограничена стандартным рабочим периодом',
    'boards': [
      {
        'id': 2,
        'name': 'Доска проекта СМС'
      },
      {
        'id': 4,
        'name': 'development'
      }
    ],
    'type': {
      'self': 'https://api.tracker.yandex.net/v2/issuetypes/2',
      'id': '2',
      'key': 'task',
      'display': 'Задача'
    },
    'priority': {
      'self': 'https://api.tracker.yandex.net/v2/priorities/3',
      'id': '3',
      'key': 'normal',
      'display': 'Средний'
    },
    'previousStatusLastAssignee': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'createdAt': '2023-11-28T14:34:35.846+0000',
    'followers': [
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000005',
        'id': '8000000000000005',
        'display': 'Алексей Калиничев',
        'cloudUid': 'ajeuod5beum5ki4v1iop',
        'passportUid': 1918030851
      },
      {
        'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
        'id': '8000000000000004',
        'display': 'Дмитрий Бехтерев',
        'cloudUid': 'ajejdcmrggor5esajlfl',
        'passportUid': 865369739
      }
    ],
    'createdBy': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'commentWithoutExternalMessageCount': 1,
    'votes': 0,
    'commentWithExternalMessageCount': 0,
    'assignee': {
      'self': 'https://api.tracker.yandex.net/v2/users/8000000000000004',
      'id': '8000000000000004',
      'display': 'Дмитрий Бехтерев',
      'cloudUid': 'ajejdcmrggor5esajlfl',
      'passportUid': 865369739
    },
    'queue': {
      'self': 'https://api.tracker.yandex.net/v2/queues/DEVELOPMENT',
      'id': '4',
      'key': 'DEVELOPMENT',
      'display': 'development'
    },
    'updatedAt': '2023-11-28T14:52:24.823+0000',
    'status': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/29',
      'id': '29',
      'key': 'otlozen',
      'display': 'Отложен'
    },
    'previousStatus': {
      'self': 'https://api.tracker.yandex.net/v2/statuses/1',
      'id': '1',
      'key': 'open',
      'display': 'Открыт'
    },
    'parent': {
      'self': 'https://api.tracker.yandex.net/v2/issues/STRUCTURE-2',
      'id': '655f627d5c93d16f5d1fc850',
      'key': 'STRUCTURE-2',
      'display': 'Расстановка'
    },
    'favorite': false,
    'workLogs': []
  }
]

export {
  issuesList
}